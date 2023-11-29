from PIL import Image
import os
import sys

def convert_png_to_webp(input_path, output_path, quality=80):
    try:
        # Open the PNG image
        with Image.open(input_path) as img:
            # Convert to WebP format with specified quality
            img.save(output_path, "WEBP", quality=quality)
        print(f"Conversion successful: {input_path} -> {output_path}")
    except Exception as e:
        print(f"Error converting {input_path}: {e}")

def convert_folder_png_to_webp(input_folder, output_folder, quality=80):
    # Ensure output folder exists
    os.makedirs(output_folder, exist_ok=True)

    # Loop through all PNG files in the input folder
    for filename in os.listdir(input_folder):
        if filename.endswith(".png"):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".webp")
            convert_png_to_webp(input_path, output_path, quality)

if __name__ == "__main__":
    # Check if the correct number of command line arguments is provided
    if len(sys.argv) != 4:
        print("Usage: python script.py <input_folder> <output_folder> <quality>")
        sys.exit(1)

    # Get input and output folders and quality from command line arguments
    input_folder = sys.argv[1]
    output_folder = sys.argv[2]
    quality = int(sys.argv[3])

    convert_folder_png_to_webp(input_folder, output_folder, quality)
    # >>>python png2webp.py /path/to/your/png/folder /path/to/your/output/webp/folder 90