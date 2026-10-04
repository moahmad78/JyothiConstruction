<?php
/**
 * Universal Remote Killswitch & Status API for GoDaddy, Hostinger, cPanel & Shared Hosting
 * Zero configuration required - Works on any PHP 7.x / 8.x server out of the box!
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, x-api-key');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$dataFile = __DIR__ . '/.site_status.json';
$masterKey = 'jyothi_master_key_2026';

// Default initial configuration
$defaultConfig = [
    'project' => 'jyothi-construction',
    'isBlocked' => false,
    'status' => 'active',
    'reason' => 'payment_pending',
    'title' => 'Website Temporarily Suspended',
    'message' => 'Access to this website has been temporarily suspended by the administrator.',
    'allowedDomains' => ['*'],
    'redirectUrl' => '',
    'showContact' => true,
    'developerContact' => [
        'name' => 'Sahil Sheikh',
        'phone' => '+91 9008 777 742',
        'instagram' => 'https://www.instagram.com/sahil_sheikh78/'
    ],
    'updatedAt' => date('c')
];

function loadConfig($dataFile, $defaultConfig) {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        $decoded = json_decode($content, true);
        if (is_array($decoded)) {
            return array_merge($defaultConfig, $decoded);
        }
    }
    return $defaultConfig;
}

function saveConfig($dataFile, $config) {
    $config['updatedAt'] = date('c');
    return file_put_contents($dataFile, json_encode($config, JSON_PRETTY_PRINT));
}

$config = loadConfig($dataFile, $defaultConfig);

// -------------------------------------------------------------
// 1. JSON API REQUESTS (GET / POST)
// -------------------------------------------------------------
$isJsonRequest = (isset($_GET['api']) || isset($_GET['action']) || $_SERVER['REQUEST_METHOD'] === 'POST' || 
    (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false));

if ($isJsonRequest) {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-cache, no-store, must-revalidate');

    // POST: Update status
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $raw = file_get_contents('php://input');
        $body = json_decode($raw, true) ?: $_POST;
        
        $authHeader = $_SERVER['HTTP_X_API_KEY'] ?? $_SERVER['HTTP_AUTHORIZATION'] ?? '';
        $providedKey = str_replace('Bearer ', '', $authHeader) ?: ($body['apiKey'] ?? '');

        if ($providedKey !== $masterKey) {
            http_response_code(403);
            echo json_encode(['success' => false, 'message' => 'Access denied: Invalid master key']);
            exit();
        }

        foreach (['isBlocked', 'status', 'reason', 'title', 'message', 'allowedDomains', 'redirectUrl', 'showContact', 'developerContact'] as $key) {
            if (isset($body[$key])) {
                $config[$key] = $body[$key];
            }
        }

        saveConfig($dataFile, $config);
        echo json_encode([
            'success' => true,
            'message' => $config['isBlocked'] ? 'Website BLOCKED / DOWN successfully' : 'Website restored to LIVE',
            'config' => $config
        ]);
        exit();
    }

    // GET: Query status
    $clientDomain = $_GET['domain'] ?? $_SERVER['HTTP_HOST'] ?? 'unknown';
    $domainAllowed = true;
    if (isset($config['allowedDomains']) && is_array($config['allowedDomains']) && !in_array('*', $config['allowedDomains'])) {
        $domainAllowed = false;
        foreach ($config['allowedDomains'] as $d) {
            if (stripos($clientDomain, trim($d)) !== false || $clientDomain === 'localhost') {
                $domainAllowed = true;
                break;
            }
        }
    }

    $effectiveBlocked = $config['isBlocked'] || !$domainAllowed;

    echo json_encode([
        'success' => true,
        'project' => $config['project'],
        'isBlocked' => $effectiveBlocked,
        'status' => $effectiveBlocked ? 'blocked' : 'active',
        'reason' => !$domainAllowed ? 'unauthorized_domain' : $config['reason'],
        'title' => !$domainAllowed ? 'Unauthorized Domain License' : $config['title'],
        'message' => !$domainAllowed ? "This domain ({$clientDomain}) is not licensed." : $config['message'],
        'allowedDomains' => $config['allowedDomains'],
        'redirectUrl' => $config['redirectUrl'] ?? '',
        'showContact' => $config['showContact'] ?? true,
        'developerContact' => $config['developerContact'] ?? null,
        'updatedAt' => $config['updatedAt']
    ]);
    exit();
}

// -------------------------------------------------------------
// 2. EMBEDDED WEB DASHBOARD (When opened in any browser)
// -------------------------------------------------------------
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Master Control Dashboard (Hostinger / GoDaddy)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0f17; color: #f3f4f6; }
        code { font-family: 'JetBrains Mono', monospace; }
    </style>
</head>
<body class="min-h-screen bg-[#0b0f17] text-gray-100 p-6 md:p-12">
    <div class="max-w-4xl mx-auto">
        <header class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-white/10 gap-4">
            <div>
                <span class="text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-400 px-3 py-1 rounded-md border border-amber-500/30">
                    Hostinger / GoDaddy Universal API
                </span>
                <h1 class="text-2xl sm:text-3xl font-black text-white mt-2">Website Remote Lockdown Console</h1>
            </div>
            <a href="?api=1" target="_blank" class="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold border border-white/10 transition">
                Raw JSON Endpoint
            </a>
        </header>

        <div class="mt-8 bg-[#121824] border border-white/10 rounded-3xl p-6 md:p-8">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                    <span class="text-xs uppercase tracking-widest text-gray-400 font-bold">Live Status</span>
                    <div class="flex items-center gap-3 mt-2">
                        <span class="w-3.5 h-3.5 rounded-full <?= $config['isBlocked'] ? 'bg-red-500 animate-ping' : 'bg-emerald-500' ?>"></span>
                        <h2 class="text-2xl font-black <?= $config['isBlocked'] ? 'text-red-400' : 'text-emerald-400' ?>">
                            <?= $config['isBlocked'] ? 'WEBSITE BLOCKED / DOWN' : 'WEBSITE LIVE & ACTIVE' ?>
                        </h2>
                    </div>
                </div>

                <button id="toggleBtn" class="px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white shadow-xl transition-all <?= $config['isBlocked'] ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-red-600 hover:bg-red-500' ?>">
                    <?= $config['isBlocked'] ? 'Restore Website LIVE' : 'KILL / BLOCK WEBSITE' ?>
                </button>
            </div>
        </div>

        <form id="cfgForm" class="mt-8 bg-[#121824] border border-white/10 rounded-3xl p-6 md:p-8 space-y-5">
            <h3 class="text-base font-bold text-white mb-4">Remote Notice Customizer</h3>
            
            <div>
                <label class="block text-xs font-bold text-gray-300 uppercase mb-2">Notice Title</label>
                <input id="title" type="text" value="<?= htmlspecialchars($config['title']) ?>" class="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm text-white" />
            </div>

            <div>
                <label class="block text-xs font-bold text-gray-300 uppercase mb-2">Detailed Message</label>
                <textarea id="message" rows="3" class="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm text-white"><?= htmlspecialchars($config['message']) ?></textarea>
            </div>

            <div>
                <label class="block text-xs font-bold text-gray-300 uppercase mb-2">Master Key</label>
                <input id="key" type="password" value="jyothi_master_key_2026" class="w-full px-4 py-3 bg-black/40 border border-white/15 rounded-xl text-sm text-white font-mono" />
            </div>

            <button type="submit" class="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold rounded-xl text-xs uppercase tracking-wider transition">
                Update Notice Settings
            </button>
        </form>
    </div>

    <script>
        const isCurrentlyBlocked = <?= $config['isBlocked'] ? 'true' : 'false' ?>;
        const toggleBtn = document.getElementById('toggleBtn');
        const cfgForm = document.getElementById('cfgForm');

        toggleBtn.addEventListener('click', async () => {
            const willBlock = !isCurrentlyBlocked;
            const key = document.getElementById('key').value.trim();
            const res = await fetch('', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-api-key': key },
                body: JSON.stringify({ apiKey: key, isBlocked: willBlock })
            });
            const data = await res.json();
            if (data.success) {
                location.reload();
            } else {
                alert(data.message);
            }
        });

        cfgForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const key = document.getElementById('key').value.trim();
            const title = document.getElementById('title').value.trim();
            const message = document.getElementById('message').value.trim();
            const res = await fetch('', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-api-key': key },
                body: JSON.stringify({ apiKey: key, title, message })
            });
            const data = await res.json();
            if (data.success) {
                alert('Saved successfully!');
            } else {
                alert(data.message);
            }
        });
    </script>
</body>
</html>
