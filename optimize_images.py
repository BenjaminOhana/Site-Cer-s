import os
from PIL import Image

def optimize_image(input_path, output_path, max_width):
    try:
        with Image.open(input_path) as img:
            # Resize if needed
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                print(f"Resized {input_path} to {max_width}x{new_height}")

            # Save as WebP
            img.save(output_path, 'WEBP', quality=80)
            print(f"Saved optimized image to {output_path}")
            
            # Compare sizes
            original_size = os.path.getsize(input_path)
            new_size = os.path.getsize(output_path)
            reduction = (original_size - new_size) / original_size * 100
            print(f"Size reduction: {reduction:.2f}% ({original_size/1024:.2f}KB -> {new_size/1024:.2f}KB)")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Define paths
base_dir = '/Users/benjamin/Desktop/Codes /Clients/Site Ceres/src/assets'

# Image 1: Priscilla Portrait (Large) -> Resize to 1200px width (plenty for half-screen desktop)
img1_in = os.path.join(base_dir, 'priscilla-portrait.png')
img1_out = os.path.join(base_dir, 'priscilla-portrait.webp')
optimize_image(img1_in, img1_out, 1200)

# Image 2: Horoscope Magazine (Medium) -> Resize to 800px width (plenty for card display)
img2_in = os.path.join(base_dir, 'horoscope-magazine.png')
img2_out = os.path.join(base_dir, 'horoscope-magazine.webp')
optimize_image(img2_in, img2_out, 800)
