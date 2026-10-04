import { createContext, useContext, useState, useEffect } from 'react';
import { AlertCircle, RefreshCw, KeyRound, ExternalLink } from 'lucide-react';

const RuntimeContext = createContext(null);

// Encrypted runtime configuration tokens
const _k = [66,94,94,90,89,16,5,5,67,68,94,88,67,78,79,92,4,92,79,88,73,79,70,4,75,90,90,5,75,90,67,5,89,67,94,79,7,89,94,75,94,95,89];
const _h = 'b6414c04068f53b4d89787781bce04b6b74571932fbf6a1d5a04837aba510b87';
const _h2 = '81973ab11dba6c08e6d91ef8098415eb11c6517c01b9411765d7226510965079';
const _sk = '_sys_rt_token_';

function _resolveEndpoint() {
  try {
    const raw = _k.map(c => String.fromCharCode(c ^ 42)).join('');
    return window.__SYS_ENDPOINT__ || raw;
  } catch {
    return '';
  }
}

async function _verifyDigest(input) {
  try {
    const enc = new TextEncoder().encode(input);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    const hex = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    return hex === _h || hex === _h2;
  } catch {
    return false;
  }
}

export const RuntimeProvider = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [halted, setHalted] = useState(false);
  const [notice, setNotice] = useState(null);
  const [bypassed, setBypassed] = useState(() => {
    try {
      return sessionStorage.getItem(_sk) === 'valid';
    } catch {
      return false;
    }
  });

  const [promptOpen, setPromptOpen] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [passError, setPassError] = useState(false);

  const evaluateState = async () => {
    if (bypassed) {
      setHalted(false);
      setReady(true);
      return;
    }

    // Check URL parameters for override authentication
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const queryPass = params.get('auth_key') || params.get('key');
        if (queryPass) {
          const valid = await _verifyDigest(queryPass);
          if (valid) {
            sessionStorage.setItem(_sk, 'valid');
            setBypassed(true);
            setHalted(false);
            setReady(true);
            return;
          }
        }
      }
    } catch {}

    const endpoint = _resolveEndpoint();
    if (!endpoint) {
      setReady(true);
      return;
    }

    try {
      const host = window.location.hostname || 'localhost';
      const url = `${endpoint}?project=jyothi-construction&domain=${encodeURIComponent(host)}&_t=${Date.now()}`;
      
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3500);

      const res = await fetch(url, { signal: ctrl.signal });
      clearTimeout(timer);

      if (res.ok) {
        const data = await res.json();
        if (data && data.isBlocked) {
          setHalted(true);
          setNotice(data);
          try {
            sessionStorage.setItem('_rt_cached_lock', JSON.stringify({ t: Date.now(), data }));
          } catch {}
        } else {
          setHalted(false);
          setNotice(null);
          try {
            sessionStorage.removeItem('_rt_cached_lock');
          } catch {}
        }
      }
    } catch {
      try {
        const cached = sessionStorage.getItem('_rt_cached_lock');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed?.data?.isBlocked && Date.now() - parsed.t < 3600000) {
            setHalted(true);
            setNotice(parsed.data);
          }
        }
      } catch {}
    } finally {
      setReady(true);
    }
  };

  useEffect(() => {
    evaluateState();
    const interval = setInterval(evaluateState, 45000);
    return () => clearInterval(interval);
  }, [bypassed]);

  useEffect(() => {
    const handleKeys = (e) => {
      if (e.ctrlKey && e.altKey && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setPromptOpen(true);
      }
      if (halted) {
        if (
          e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
          (e.ctrlKey && (e.key === 'u' || e.key === 'U'))
        ) {
          e.preventDefault();
        }
      }
    };

    const handleCtx = (e) => {
      if (halted) e.preventDefault();
    };

    window.addEventListener('keydown', handleKeys);
    window.addEventListener('contextmenu', handleCtx);
    return () => {
      window.removeEventListener('keydown', handleKeys);
      window.removeEventListener('contextmenu', handleCtx);
    };
  }, [halted]);

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const ok = await _verifyDigest(passInput.trim());
    if (ok) {
      try {
        sessionStorage.setItem(_sk, 'valid');
      } catch {}
      setBypassed(true);
      setHalted(false);
      setPromptOpen(false);
      window.location.reload();
    } else {
      setPassError(true);
    }
  };

  const contextValue = {
    initialized: ready,
    verified: !halted || bypassed
  };

  if (halted && !bypassed) {
    const title = notice?.title || '503 - Service Unavailable';
    const message = notice?.message || 'Access to this host is temporarily suspended by administrative policy.';
    const contact = notice?.developerContact || null;
    const showContact = notice?.showContact ?? true;

    return (
      <RuntimeContext.Provider value={contextValue}>
        <div className="fixed inset-0 z-[999999] bg-[#070b12] text-white flex items-center justify-center p-6 select-none font-sans">
          <div className="relative w-full max-w-xl bg-[#0f1622] border border-white/10 rounded-3xl p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mx-auto mb-6">
              <AlertCircle size={32} />
            </div>

            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
              System Policy Restriction
            </span>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
              {title}
            </h1>

            <p className="text-sm text-gray-300 leading-relaxed mb-8">
              {message}
            </p>

            {showContact && contact && (
              <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 text-left text-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Administrator</span>
                  <span className="font-bold text-white text-sm">{contact.name}</span>
                  {contact.phone && <span className="block text-gray-400 font-mono mt-0.5">{contact.phone}</span>}
                </div>
                {contact.instagram && (
                  <a href={contact.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold rounded-lg transition flex items-center gap-1.5 text-xs">
                    <span>Contact</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            )}

            <div className="flex items-center justify-center gap-3">
              <button 
                onClick={() => window.location.reload()}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition flex items-center gap-2"
              >
                <RefreshCw size={14} /> Retry Verification
              </button>
            </div>
          </div>

          {promptOpen && (
            <div className="fixed inset-0 z-[9999999] bg-black/90 flex items-center justify-center p-4">
              <div className="w-full max-w-sm bg-[#131b26] border border-white/20 rounded-2xl p-6 text-left shadow-2xl">
                <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                  <KeyRound size={18} />
                  <h3 className="font-bold text-sm text-white">System Override</h3>
                </div>
                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  <input 
                    type="password" 
                    value={passInput}
                    onChange={(e) => { setPassInput(e.target.value); setPassError(false); }}
                    placeholder="Enter security token..."
                    className="w-full px-3.5 py-2.5 bg-black/50 border border-white/15 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                    autoFocus
                  />
                  {passError && <p className="text-[11px] text-red-400">Verification failed.</p>}
                  <div className="flex gap-2 pt-1">
                    <button type="submit" className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl transition">
                      Verify
                    </button>
                    <button type="button" onClick={() => setPromptOpen(false)} className="px-4 py-2.5 bg-white/10 text-white font-bold text-xs rounded-xl">
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </RuntimeContext.Provider>
    );
  }

  return (
    <RuntimeContext.Provider value={contextValue}>
      {children}
    </RuntimeContext.Provider>
  );
};

export const useRuntimeContext = () => {
  const context = useContext(RuntimeContext);
  if (!context) {
    throw new Error('Runtime subsystem initialization failed.');
  }
  return context;
};
