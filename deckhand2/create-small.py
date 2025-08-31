import os
from PIL import Image

def create_thumbnails(input_dir="cards", output_dir="thumb", max_size=(600, 600)):
    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)

    # Process each file in the input directory
    for filename in os.listdir(input_dir):
        if filename.lower().endswith((".png", ".jpg", ".jpeg")):
            input_path = os.path.join(input_dir, filename)

            # Always save as JPG, keep original name but force .jpg extension
            base_name, _ = os.path.splitext(filename)
            output_path = os.path.join(output_dir, base_name + ".jpg")

            try:
                with Image.open(input_path) as img:
                    # Convert to RGB to avoid issues with PNG transparency
                    img = img.convert("RGB")

                    # Resize while maintaining aspect ratio
                    img.thumbnail(max_size, Image.Resampling.LANCZOS)

                    # Save as JPG
                    img.save(output_path, "JPEG", quality=80)
                    print(f"Saved thumbnail: {output_path}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    create_thumbnails()