import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, CheckCircle2, AlertCircle, Plus, Edit2, Trash2 } from 'lucide-react';

const ADMIN_DEFAULT_USER = import.meta.env.VITE_ADMIN_USER || 'admin';
const ADMIN_DEFAULT_PASS = import.meta.env.VITE_ADMIN_PASSWORD || 'jyothi2026';

export const JobAdminModal = ({ 
  isOpen, 
  onClose, 
  mode = 'login', // 'login' | 'create' | 'edit'
  jobToEdit = null,
  onSaveJob,
  onLoginSuccess 
}) => {
  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Job Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Civil Engineering',
    type: 'Full-time',
    location: '',
    description: ''
  });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (jobToEdit && mode === 'edit') {
      setFormData({
        title: jobToEdit.title || '',
        category: jobToEdit.category || 'Civil Engineering',
        type: jobToEdit.type || 'Full-time',
        location: jobToEdit.location || '',
        description: jobToEdit.description || ''
      });
    } else if (mode === 'create') {
      setFormData({
        title: '',
        category: 'Civil Engineering',
        type: 'Full-time',
        location: 'Bangalore, KA',
        description: ''
      });
    }
    setLoginError('');
    setFormError('');
  }, [jobToEdit, mode, isOpen]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const envUser = import.meta.env.VITE_ADMIN_USER || ADMIN_DEFAULT_USER;
    const envPass = import.meta.env.VITE_ADMIN_PASSWORD || ADMIN_DEFAULT_PASS;

    if (username.trim() === envUser && password.trim() === envPass) {
      setLoginError('');
      onLoginSuccess();
      onClose();
    } else {
      setLoginError('Invalid Username or Password. Please check .env credentials.');
    }
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setFormError('Please enter a job title');
      return;
    }
    if (!formData.location.trim()) {
      setFormError('Please enter a job location');
      return;
    }
    if (!formData.description.trim()) {
      setFormError('Please enter a brief job description');
      return;
    }

    onSaveJob({
      ...formData,
      id: mode === 'edit' && jobToEdit ? jobToEdit.id : Date.now()
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-lg bg-jyothi-blue border border-white/20 rounded-[2rem] p-6 md:p-8 shadow-2xl overflow-hidden"
      >
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-jyothi-amber/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {mode === 'login' ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-jyothi-amber/20 border border-jyothi-amber/30 flex items-center justify-center text-jyothi-amber">
                <Lock size={20} />
              </div>
              <h3 className="text-2xl font-black text-white font-heading">HR Admin Portal</h3>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Sign in to add, edit, or remove live job openings.
            </p>

            {loginError && (
              <div className="p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-jyothi-amber transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-jyothi-amber transition-colors"
                  required
                />
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-400">
                <p className="font-semibold text-jyothi-amber mb-1">Demo Access Credentials:</p>
                <p>Username: <code className="text-white bg-black/30 px-1 py-0.5 rounded">admin</code></p>
                <p>Password: <code className="text-white bg-black/30 px-1 py-0.5 rounded">jyothi2026</code></p>
                <p className="text-[11px] text-gray-500 mt-1">Configurable in root <code className="text-jyothi-amber">.env</code> file anytime.</p>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-jyothi-amber text-jyothi-blue font-black rounded-xl hover:bg-jyothi-orange hover:text-white transition-all uppercase tracking-widest text-xs shadow-lg mt-2"
              >
                Sign In to Admin
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-jyothi-amber/20 border border-jyothi-amber/30 flex items-center justify-center text-jyothi-amber">
                {mode === 'edit' ? <Edit2 size={20} /> : <Plus size={20} />}
              </div>
              <h3 className="text-2xl font-black text-white font-heading">
                {mode === 'edit' ? 'Modify Job Opening' : 'Post New Job Opening'}
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              {mode === 'edit' ? 'Update position requirements and details.' : 'Fill out details to publish a new job listing immediately.'}
            </p>

            {formError && (
              <div className="p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            <form onSubmit={handleJobSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Job Title *</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Senior Structural Engineer"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-jyothi-amber transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Category *</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-jyothi-amber transition-colors"
                  >
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Site Supervision">Site Supervision</option>
                    <option value="Administrative">Administrative</option>
                    <option value="Fabrication">Fabrication</option>
                    <option value="Plant Operations">Plant Operations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Employment Type *</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-jyothi-amber transition-colors"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Location *</label>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Bangalore, KA"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-jyothi-amber transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">Brief Description *</label>
                <textarea 
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe key responsibilities and expectations..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-jyothi-amber transition-colors resize-none"
                  required
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  type="button"
                  onClick={onClose}
                  className="w-1/3 py-3.5 bg-white/5 border border-white/10 text-gray-300 font-bold rounded-xl hover:bg-white/10 transition-colors uppercase tracking-wider text-xs"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="w-2/3 py-3.5 bg-jyothi-amber text-jyothi-blue font-black rounded-xl hover:bg-jyothi-orange hover:text-white transition-all uppercase tracking-widest text-xs shadow-lg"
                >
                  {mode === 'edit' ? 'Update Position' : 'Publish Position'}
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default JobAdminModal;
