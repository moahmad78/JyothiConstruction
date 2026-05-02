const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

// Utility to recursively find all JS/JSX files
function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.js') || name.endsWith('.jsx')) {
      files.push(name);
    }
  }
  return files;
}

// Download image function
async function downloadImage(url, filepath) {
  const controller = new AbortController();
  const timeout = setTimeout(() => { controller.abort(); }, 15000); // 15s timeout
  try {
    let res = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    
    if (!res.ok) {
        console.log(`Failed to fetch original url, using picsum instead...`);
        // Fallback to picsum with a random seed based on url
        const seed = Math.random().toString(36).substring(7);
        res = await fetch(`https://picsum.photos/seed/${seed}/1200/800`, { signal: controller.signal });
        if (!res.ok) throw new Error(`Fallback Status Code: ${res.status}`);
    }
    
    clearTimeout(timeout);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    return filepath;
  } catch (err) {
    clearTimeout(timeout);
    // If it STILL fails (e.g. abort), try to fetch a tiny placeholder without timeout
    console.log('Error during fetch, trying last resort fallback...', err.message);
    const res = await fetch(`https://picsum.photos/1200/800`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    return filepath;
  }
}

async function run() {
  const srcDir = path.join(__dirname, 'src');
  const publicImgDir = path.join(__dirname, 'public', 'assets', 'images');

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicImgDir)) {
    fs.mkdirSync(publicImgDir, { recursive: true });
  }

  const files = getFiles(srcDir);
  const urlMap = new Map();

  // Regex to match unsplash URLs inside strings
  // e.g. 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
  const urlRegex = /https:\/\/images\.unsplash\.com\/[^\s'"`]+(?:['"`])/g;

  // Find all unique URLs
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.matchAll(/https:\/\/images\.unsplash\.com\/[^\s'"`]+/g);
    for (const match of matches) {
      const url = match[0];
      if (!urlMap.has(url)) {
        // Generate a clean filename based on a hash of the URL to prevent issues
        const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
        const filename = `unsplash-${hash}.jpg`;
        urlMap.set(url, filename);
      }
    }
  }

  console.log(`Found ${urlMap.size} unique Unsplash images to download.`);

  // Download them
  let count = 0;
  for (const [url, filename] of urlMap.entries()) {
    const filepath = path.join(publicImgDir, filename);
    if (!fs.existsSync(filepath)) {
      console.log(`Downloading ${filename}...`);
      try {
        await downloadImage(url, filepath);
      } catch (err) {
        console.error(`Failed to download ${url}: ${err.message}`);
      }
    } else {
      console.log(`File ${filename} already exists. Skipping download.`);
    }
    count++;
  }

  // Replace in files
  console.log('Replacing URLs in source files...');
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    for (const [url, filename] of urlMap.entries()) {
      // Create a global replacement. We use split/join instead of replace with string to avoid regex escaping hell.
      if (content.includes(url)) {
        content = content.split(url).join(`/assets/images/${filename}`);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${path.relative(__dirname, file)}`);
    }
  }

  console.log('Done!');
}

run().catch(console.error);
