import React from "react";
import Card from "./Card";
import FakeNews from "./images/Fake-news.jpg";
import ML from "./images/ML.jpg";
import FaceClassifier from "./images/Face-Classifier.jpg";
import ColorTracker from "./images/Color-tracker.jpg";
import Motion from "./images/Motion.jpg";
import FrontEnd from "./images/MovieReview.jpg";


function Project(props){
  return(
    <div className="class-colored" id="projects">
		<div  className="container">
		<h2>PROJECTS</h2>

    <hr />

    <div class = "row project-row">
    <Card
    image = {ML}
    heading = "Machine Learning"
    desc = "Implementation of ML Algorithms"
    tags ="Machine Learning, Linear Regression, Logistic Regression"
    link = "https://github.com/PranjliSinghal/Machine-Learning-Algorithms" />

    <Card
    image = {FakeNews}
    heading = "Fake News Detector"
    desc ="Fake News Detection Using NLP Techniques"
    tags = "Machine Learning, Classification, NLP"
    link ="https://github.com/PranjliSinghal/Fake-News-Detector" />

    </div>

    <div class = "gap">
    </div>

    <div class = "row project-row">
    <Card
    image = {FaceClassifier}
    heading = "Face Classifier"
    desc = "Face Classification on LFW and Olivetti Datasets"
    tags ="Machine Learning, Classification, PCA"
    link ="https://github.com/PranjliSinghal/Face-Recognizer"/>

    <Card
    image = {FrontEnd}
    heading = "Frontend Development"
    desc ="Some Frontend Webpages"
    tags = "HTML, CSS, Bootstrap, JavaScript"
    link ="https://github.com/PranjliSinghal/50DaysChallenge"/>

    </div>

    <div class = "gap">
    </div>

    <div class = "row project-row">
    <Card
    image = {ColorTracker}
    heading = "Color Based Object Detection"
    desc ="Detect Object of Particular Colors"
    tags = "Object Detection, OpenCV, Python"
    link ="https://github.com/PranjliSinghal/Color-tracker"/>


    <Card
    image = {Motion}
    heading = "Motion Tracker"
    desc ="Detect and Track the motion of webcam feed"
    tags = "Motion Tracking, Image Processing, OpenCV"
    link = "https://github.com/PranjliSinghal/Motion-tracker" />
    </div>

    </div>
    </div>
  );

}

export default Project;
