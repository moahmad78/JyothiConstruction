import os
import glob
from PIL import Image

image_dir = 'public/Jyothi'
files = glob.glob(os.path.join(image_dir, '*.[jJ][pP][gG]')) + glob.glob(os.path.join(image_dir, '*.[pP][nN][gG]'))

print(f"Found {len(files)} images to optimize.")

before_total = 0
after_total = 0

for file_path in files:
    try:
        size_before = os.path.getsize(file_path)
        before_total += size_before
        
        with Image.open(file_path) as img:
            # Convert RGBA/P to RGB if JPEG
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')
            
            # Max width/height 1600 for web cards, 1920 for full screen
            w, h = img.size
            max_dim = 1800
            if max(w, h) > max_dim:
                scale = max_dim / max(w, h)
                new_w = int(w * scale)
                new_h = int(h * scale)
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            # Save optimized
            img.save(file_path, 'JPEG', quality=82, optimize=True, progressive=True)
            
        size_after = os.path.getsize(file_path)
        after_total += size_after
        print(f"Optimized {os.path.basename(file_path)}: {size_before/1024/1024:.2f}MB -> {size_after/1024:.0f}KB")
    except Exception as e:
        print(f"Error optimizing {file_path}: {e}")

print(f"\nOptimization complete!")
print(f"Before: {before_total/1024/1024:.1f} MB")
print(f"After: {after_total/1024/1024:.1f} MB")
print(f"Saved: {(before_total - after_total)/1024/1024:.1f} MB ({(1 - after_total/before_total)*100:.1f}%)")
