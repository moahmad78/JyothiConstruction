# Jyothi Construction - Remote Lockdown & Killswitch API

Universal Remote Killswitch, Domain Protection, and Real-Time Status Management API with a built-in Developer Dashboard.

---

## 🌟 Features
1. **Universal Domain Support**: The frontend React website can be hosted on **ANY** domain (Vercel, Netlify, cPanel, Hostinger, custom domain, localhost). The API has full CORS enabled (`*`), so it will always respond.
2. **Instant Remote Lockdown / Killswitch**:
   - One click in your dashboard blocks the website immediately for all visitors worldwide.
   - One click unblocks and restores live service.
3. **Customizable Notice & Presets**:
   - 💳 **Payment Pending / Client Hold**
   - 🛠️ **Scheduled Maintenance**
   - 🔒 **Domain License Expired / Stolen Code Protection**
   - ⚙️ **Custom Title & Message**
4. **Domain Protection / Anti-Theft Whitelisting**:
   - If someone copies your source code and hosts it on an unauthorized domain without permission, you can whitelist only approved domains (e.g., `jyothiconstruction.com, localhost`). All other domains will be locked automatically!
5. **Emergency Developer Backdoor**:
   - Even when the site is blocked for clients, you can press **`Ctrl + Alt + K`** on the frontend or visit `?dev_bypass=jyothi_bypass_2026` to unlock and browse the site for testing.
6. **Built-in Web Dashboard**:
   - Open `/dashboard` in your browser on phone or PC to manage everything visually.
   - Default Master Key: `jyothi_master_key_2026`

---

## 🚀 Running Locally
```bash
cd remote-control-api
npm install
npm start
```
- API Endpoint: `http://localhost:5000/api/site-status`
- Web Dashboard: `http://localhost:5000/dashboard`

---

## ☁️ Deploy Free to Vercel (1 Minute)
1. Install Vercel CLI (if not installed): `npm i -g vercel`
2. Run inside `remote-control-api`:
   ```bash
   vercel
   ```
3. Copy your live Vercel URL (e.g. `https://jyothi-control.vercel.app`).
4. Update `VITE_REMOTE_STATUS_API_URL` in the frontend `.env` to:
   ```env
   VITE_REMOTE_STATUS_API_URL=https://jyothi-control.vercel.app/api/site-status
   ```
5. Done! Now you can control your website from anywhere in the world.

---

## 📡 REST API Documentation

### 1. Check Site Status (Public GET)
- **URL**: `GET /api/site-status?project=jyothi-construction&domain=yourdomain.com`
- **Response**:
```json
{
  "success": true,
  "isBlocked": false,
  "status": "active",
  "title": "Website Temporarily Suspended",
  "message": "Access has been temporarily paused by administrator.",
  "reason": "payment_pending",
  "allowedDomains": ["*"],
  "developerContact": {
    "name": "Sahil Sheikh",
    "phone": "+91 9008 777 742",
    "instagram": "https://www.instagram.com/sahil_sheikh78/"
  }
}
```

### 2. Update / Toggle Status (Protected POST)
- **URL**: `POST /api/site-status`
- **Headers**:
  - `Content-Type: application/json`
  - `x-api-key: jyothi_master_key_2026`
- **Payload**:
```json
{
  "apiKey": "jyothi_master_key_2026",
  "isBlocked": true,
  "status": "blocked",
  "reason": "payment_pending",
  "title": "Services Suspended - Account Settlement Required",
  "message": "Please contact the developer to resolve pending milestones."
}
```
