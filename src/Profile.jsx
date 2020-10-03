import React from "react";
import ProfilePic from "./images/Me.jpg";



function Profile(){
	return (
		<div className = "class-colored" id="profile">
		                <div className="container">
										       <h2 class="profile-heading">PROFILE</h2>
		                        <hr/>
		                        <div className="row">
												     <div className="col-lg-6">

																			 <img src={ProfilePic} alt="Profile Picture"
																			 />
		                              </div>
		                                <div className="col-lg-6">
		                                        <p><strong>Name</strong></p>
		                                        <p>Pranjli Singhal</p>
		                                        <p><strong>Email</strong></p>
		                                        <p>pranjlisinghal1@gmail.com</p>
		                                        <p><strong>Hobbies</strong></p>
		                                        <p>Writing(Check out <a href="https://inkedinsights.wordpress.com/" className="contact-link">My blogs</a>),Dancing</p>
		                                </div>
		                        </div>
								         </div>
		        </div>
	);
}

export default Profile;
