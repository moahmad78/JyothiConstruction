# Hostinger / GoDaddy PHP Remote API & Control Dashboard

This solution is designed for **GoDaddy, Hostinger, cPanel, Apache, and Shared PHP Hosting** where Node.js servers may not be running.

---

## 🚀 How to Use on Hostinger / GoDaddy in 2 Steps:

### Step 1: Upload `api.php`
- Log in to your Hostinger or GoDaddy cPanel / File Manager.
- Upload [`api.php`](api.php) to your server's `public_html` (or any domain/subdomain you control, e.g. `https://your-agency-site.com/api.php` or `https://client-domain.com/api.php`).

### Step 2: Open Dashboard in Browser
- Open `https://YOUR_DOMAIN/api.php` in your mobile or laptop browser.
- You will see the **Lockdown & Status Control Dashboard**.
- Toggle between **LIVE** and **BLOCKED** with a single click!
- Default Master Key: `jyothi_master_key_2026`

---

## 📡 Endpoints
- **Web Dashboard**: `https://YOUR_DOMAIN/api.php`
- **JSON API Status**: `https://YOUR_DOMAIN/api.php?api=1`
- **Toggle Status via POST**:
```bash
curl -X POST "https://YOUR_DOMAIN/api.php" \
  -H "Content-Type: application/json" \
  -H "x-api-key: jyothi_master_key_2026" \
  -d '{"isBlocked": true, "title": "Service Suspended", "reason": "payment_pending"}'
```
