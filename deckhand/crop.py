from PIL import Image
import os

def crop_images(input_dir, output_dir, margin=50):
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Get a list of all files in the input directory
    files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]

    for file in files:
        print(file)
        # Construct the full path for each file
        input_path = os.path.join(input_dir, file)

        # Open the image using Pillow
        image = Image.open(input_path)

        # Get the dimensions of the image
        width, height = image.size

        # Define the cropping box (50 pixels from each edge)
        left = margin
        top = margin
        right = width - margin
        bottom = height - margin

        # Crop the image
        cropped_image = image.crop((left, top, right, bottom))

        # Construct the output path for the cropped image
        output_path = os.path.join(output_dir, file)

        # Save the cropped image to the output directory
        cropped_image.save(output_path)

if __name__ == "__main__":
    # Specify your input and output directories
    input_directory = "./ES_IN"
    output_directory = "./ES_OUT"

    # Specify the margin to be removed (50 pixels in this case)
    margin_to_remove = 62

    # Call the function to crop and save the images
    crop_images(input_directory, output_directory, margin_to_remove)