# Image Forgery Detection Application

Welcome to the Image Forgery Detection Application, a project that combines the power of deep learning and React to help you detect image forgeries quickly and efficiently. This project is divided into two parts: the frontend and the backend. The frontend is developed in React and provides an intuitive user interface for uploading images, while the backend is built with Flask and performs image forensics using Error Level Analysis (ELA) to determine if an image is forged or not.

## Features

- Upload images for forgery detection.
- Real-time feedback on image authenticity.
- Sleek single-page scrolling design.
- Integration of GSAP and ScrollTrigger for smooth animations.
- React Router for navigation.
- Material UI components for a modern look and feel.

## Frontend

The frontend of this project is built using React, a popular JavaScript library for building user interfaces. It provides an interactive and user-friendly interface for uploading images. When you upload an image, the React app sends it to the Flask backend, which performs ELA analysis. The result (forged or not forged) is then displayed on the webpage.

### Frontend Technologies

- React
- Axios for HTTP requests
- GSAP for animations
- ScrollTrigger for smooth scrolling animations
- React Router for navigation
- Material UI for styling

### Frontend Setup

1. Clone this repository.
2. Navigate to the `frontend` directory.
3. Run `npm install` to install the required dependencies.
4. Start the development server with `npm start`.

## Backend

The backend of this project is built using Flask, a Python web framework. It receives the uploaded image, performs ELA analysis, and sends the result back to the frontend.

### Backend Technologies

- Flask
- Pillow for image processing

### Backend Setup

1. Navigate to the [`backend`](https://drive.google.com/drive/folders/1TRFa-IgBrRrV-Vb2yyUiktYvh3rwpquv?usp=sharing) directory.
2. Create a Python virtual environment.
3. Install the required packages using `pip install -r requirements.txt`.
4. Start the Flask server with `python main.py`.

## How it Works

1. Visit the application in your web browser.
2. Upload an image using the provided interface.
3. The React frontend will send the image to the Flask backend.
4. The Flask server will perform ELA analysis on the image to determine its authenticity.
5. The result (forged or not forged) is sent back to the frontend and displayed on the webpage.

## Demo

You can check out a live demo of the Image Forgery Detection Application [here](#).

## Project Structure

The project structure is organized as follows:

```
image-forgery-detection-app/
├── frontend/            # React frontend
│   ├── src/assets/
│   ├── public/
│   
├── backend/             # Flask backend
│   ├── main.py
│   ├── model/model.h5
|   ├── requirements.txt
```


Thank you for using the Image Forgery Detection Application! If you have any questions or feedback, please don't hesitate to reach out.

**Enjoy detecting image forgeries with ease!**
