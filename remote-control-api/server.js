import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const MASTER_API_KEY = process.env.MASTER_API_KEY || 'jyothi_master_key_2026';
const CONFIG_FILE = path.join(__dirname, 'site-status-config.json');

// Ensure wide-open CORS so ANY domain running the frontend can communicate with this API
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper to load persisted configuration
function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const raw = fs.readFileSync(CONFIG_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading config file:', err);
  }
  return {
    project: 'jyothi-construction',
    isBlocked: false,
    status: 'active',
    reason: 'payment_pending',
    title: 'Website Temporarily Suspended',
    message: 'Access to this website has been temporarily suspended by the administrator.',
    allowedDomains: ['*'],
    redirectUrl: '',
    showContact: true,
    developerContact: {
      name: 'Sahil Sheikh',
      contact: '@sahil_sheikh78',
      phone: '+91 9008 777 742',
      instagram: 'https://www.instagram.com/sahil_sheikh78/'
    },
    updatedAt: new Date().toISOString()
  };
}

// Helper to persist configuration
function saveConfig(config) {
  try {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error saving config file:', err);
    return false;
  }
}

// -------------------------------------------------------------
// PUBLIC API: Called by frontend on any domain
// GET /api/site-status
// -------------------------------------------------------------
app.get('/api/site-status', (req, res) => {
  // Prevent any browser or intermediary CDN caching so status updates instantly
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  const config = loadConfig();
  const clientDomain = req.query.domain || req.hostname;
  const project = req.query.project || 'jyothi-construction';

  // Domain whitelist verification if restricted
  let domainAllowed = true;
  if (Array.isArray(config.allowedDomains) && config.allowedDomains.length > 0 && !config.allowedDomains.includes('*')) {
    domainAllowed = config.allowedDomains.some(d => {
      const cleanTarget = d.trim().toLowerCase().replace(/^https?:\/\//, '');
      const cleanCurrent = clientDomain.trim().toLowerCase().replace(/^https?:\/\//, '');
      return cleanCurrent.includes(cleanTarget) || cleanCurrent === 'localhost';
    });
  }

  // If domain is not whitelisted, treat as unauthorized block
  const effectiveBlocked = config.isBlocked || !domainAllowed;

  res.json({
    success: true,
    project: config.project || project,
    isBlocked: effectiveBlocked,
    status: effectiveBlocked ? (config.status === 'active' ? 'blocked' : config.status) : 'active',
    reason: !domainAllowed ? 'unauthorized_domain' : config.reason,
    title: !domainAllowed ? 'Unauthorized Domain License' : config.title,
    message: !domainAllowed 
      ? `This application is not licensed to run on domain "${clientDomain}". Contact developer to activate domain.` 
      : config.message,
    allowedDomains: config.allowedDomains || ['*'],
    redirectUrl: config.redirectUrl || '',
    showContact: config.showContact ?? true,
    developerContact: config.developerContact || null,
    updatedAt: config.updatedAt
  });
});

// Health check ping
app.get('/api/site-status/ping', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Jyothi Construction Remote Killswitch & Status API'
  });
});

// -------------------------------------------------------------
// DASHBOARD & ADMIN API: Used by the Developer Dashboard
// -------------------------------------------------------------

// Dashboard authentication
app.post('/api/auth/login', (req, res) => {
  const { key } = req.body;
  if (key === MASTER_API_KEY) {
    return res.json({ success: true, token: MASTER_API_KEY });
  }
  return res.status(401).json({ success: false, message: 'Invalid master access key' });
});

// POST /api/site-status: Update status (Block/Unblock, Message, Domains)
app.post('/api/site-status', (req, res) => {
  const authHeader = req.headers['x-api-key'] || req.headers.authorization?.replace('Bearer ', '');
  const providedKey = authHeader || req.body.apiKey;

  if (providedKey !== MASTER_API_KEY) {
    return res.status(403).json({
      success: false,
      message: 'Access denied: Valid master API key required.'
    });
  }

  const currentConfig = loadConfig();
  const {
    isBlocked,
    status,
    reason,
    title,
    message,
    allowedDomains,
    redirectUrl,
    showContact,
    developerContact
  } = req.body;

  const updatedConfig = {
    ...currentConfig,
    isBlocked: typeof isBlocked === 'boolean' ? isBlocked : currentConfig.isBlocked,
    status: status || (isBlocked ? 'blocked' : 'active'),
    reason: reason || currentConfig.reason,
    title: title !== undefined ? title : currentConfig.title,
    message: message !== undefined ? message : currentConfig.message,
    allowedDomains: Array.isArray(allowedDomains) ? allowedDomains : currentConfig.allowedDomains,
    redirectUrl: redirectUrl !== undefined ? redirectUrl : currentConfig.redirectUrl,
    showContact: typeof showContact === 'boolean' ? showContact : currentConfig.showContact,
    developerContact: developerContact ? { ...currentConfig.developerContact, ...developerContact } : currentConfig.developerContact,
    updatedAt: new Date().toISOString()
  };

  const saved = saveConfig(updatedConfig);
  if (!saved) {
    return res.status(500).json({ success: false, message: 'Failed to write updated config to disk' });
  }

  res.json({
    success: true,
    message: updatedConfig.isBlocked ? 'Website has been BLOCKED / DOWN successfully!' : 'Website is now LIVE / ACTIVE!',
    config: updatedConfig
  });
});

// Serve developer dashboard on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Remote Killswitch & Status API Server Online`);
  console.log(`📡 Public Status Endpoint: http://localhost:${PORT}/api/site-status`);
  console.log(`🎛️ Developer Control Dashboard: http://localhost:${PORT}/dashboard`);
  console.log(`🔑 Master Key: ${MASTER_API_KEY}`);
  console.log(`=======================================================`);
});

export default app;
