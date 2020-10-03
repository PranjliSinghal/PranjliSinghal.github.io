import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Experience from "./Experience";
import Skills from "./Skills";
import Contacts from "./Contact";
import Project from "./Projects";

function App(){
	return (
<div>
  <Navbar />
		<Profile />
		<Experience />
		<Project />
		<Skills />
		<Contacts />
</div>
);
}

export default App;
