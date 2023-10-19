# from flask import Flask, render_template,request
from flask import Flask, request, jsonify
from flask_cors import CORS
import pathlib
from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd
from array import array
import os
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt
from PIL import Image, ImageEnhance, ImageChops
from skimage.transform import resize, rescale
from keras.preprocessing.image import img_to_array
import shutil
import time

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


@app.route("/")
def home():
    if os.path.exists(f"../project/public/resaved.jpg"):
        os.remove(f"../project/public/resaved.jpg")
    
    if os.path.exists(f"../project/public/img.jpg"):
        os.remove(f"../project/public/img.jpg")

    if os.path.exists(f"./uploads/img.jpg"):
        os.remove(f"./uploads/img.jpg")
    time.sleep(2)
    return jsonify({"message": "Reseted successfully"})
    # return {"message": "Hello from backend"}


def image_to_ela(path, quality, resave_path):
    """Gets images specified as path and resaves it at a new path resave_path at specified quality"""
    try:
        # Check if the file format is supported (JPEG or PNG)
        if path.endswith("jpg") or path.endswith("jpeg") or path.endswith("png"):
            # Open the image and convert it to RGB mode
            image = Image.open(path).convert("RGB")

            # Resave the image with the specified quality
            image.save("resaved.jpg", "JPEG", quality=quality)

            resaved = Image.open("resaved.jpg")

            # Calculate the ELA (Error Level Analysis) image by taking the difference between the original and resaved image
            ela_image = ImageChops.difference(image, resaved)

            # Get the minimum and maximum pixel values in the ELA image
            band_values = ela_image.getextrema()
            max_value = max([val[1] for val in band_values])

            # If the maximum value is 0, set it to 1 to avoid division by zero
            if max_value == 0:
                max_value = 1

            # Scale the pixel values of the ELA image to the range [0, 255]
            scale = 255.0 / max_value
            ela_image = ImageEnhance.Brightness(ela_image).enhance(scale)

            # # Save the ELA image with the same filename in the specified resave path
            ela_image.save(os.path.join(resave_path, os.path.basename(path)), "JPEG")

            ela_image = img_to_array(ela_image)
            ela_image.resize(150, 150, 3)

            # print(ela_image.shape)
            # print(ela_image)

            ela_image = ela_image.flatten() / 255.0
            ela_image = ela_image.reshape(-1, 150, 150, 3)

            # df=pd.DataFrame(ela_image)
            # df.to_csv("text.csv")

            image1 = ela_image
            # image1=image1.flatten()/255.0
            # image1 = image1.reshape(-1,150,150,3)
            model_path = "model\model.h5"

            # prediction
            model = load_model(model_path)
            prob = model.predict(image1)[0]
            idx = np.argmax(prob)
            pred = model.predict(image1)
            print(pred)
            label = "Forged" if pred[0][0] >= 0.45 else "Not Forged"
            return label, prob

    except Exception as e:
        print(f"Could not convert {path} to ELA: {str(e)}")


@app.route("/upload", methods=["POST"])
def upload():
    file = request.files["file"]
    file.save("uploads/" + file.filename)

    old_file = os.path.join("uploads", file.filename)
    new_file = os.path.join("uploads", "img.jpg")
    os.rename(old_file, new_file)

    if os.path.exists(f"./uploads/{file.filename}"):
        os.remove(f"./uploads/{file.filename}")

    target_img = new_file
    resave_path = "uploads/"
    label, prob = image_to_ela(target_img, 99, resave_path)
    prob1=str(prob[0])
    print(prob1)

    f1 = "./uploads/img.jpg"
    shutil.copy(f1, "../project/public")

    f2 = "resaved.jpg"
    shutil.copy(f2, "../project/public")

    if prob >= 0.4535:
        return jsonify({"message":"Forged","probability": prob1})
    else:
        return jsonify({"message":"Not Forged","probability": prob1})


@app.route("/reset", methods=["POST"])
def reset():
    if os.path.exists(f"../project/public/resaved.jpg"):
        os.remove(f"../project/public/resaved.jpg")
    
    if os.path.exists(f"../project/public/img.jpg"):
        os.remove(f"../project/public/img.jpg")
        
    if os.path.exists(f"./uploads/img.jpg"):
        os.remove(f"./uploads/img.jpg")
    time.sleep(2)
    return jsonify({"message": "Reseted successfully"})


if __name__ == "__main__":
    app.run(debug=True)
