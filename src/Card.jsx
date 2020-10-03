import React from "react";

function Card(props){
  return(
    <div class ="project-card">
    <img src={props.image} alt="Profile Picture"
    />
    <h3><a href = {props.link}>{props.heading}</a></h3>
    <hr class="project-hr" />
    <h5>{props.desc}</h5>

    <p>{props.tags}</p>

    </div>

  );
}

export default Card;
