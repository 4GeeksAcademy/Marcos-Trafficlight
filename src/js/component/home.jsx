import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState ("red");
	const [purpleActivo, setPurpleActive] = useState (false);

	const cambiaColor = () => {
		if (selectedColor === "red") {
			setSelectedColor("yellow");
		} else if (selectedColor === "yellow") {
			setSelectedColor("green");
		} else if (selectedColor === "green"){
			setSelectedColor("red");
		} else {
			if (selectedColor === "red") {
				setSelectedColor("yellow");
			} else if (selectedColor === "yellow") {
				setSelectedColor("green");
			} else if (selectedColor === "green"){
				setSelectedColor("purple");
			} else if (selectedColor === "purple"){
				setSelectedColor("red");
			}
		};
	};
		
	

	const botonPurple = () =>{
		setPurpleActive(!purpleActivo);
	}

	return (
		<div className="container">
			<div className="stick"></div>
			<div className="traffic-light">
				<div 
				onClick={() => setSelectedColor("red")}
				className={"light red" + ((selectedColor === "red") ? " glow" : "")}>
				</div>
				<div
				onClick={() => setSelectedColor("yellow")} 
				className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}>
				</div>
				<div 
				onClick={() => setSelectedColor("green")}
				className={"light green" + ((selectedColor === "green") ? " glow" : "")}>
				</div>
				{purpleActivo && <div 
				onClick={() => setSelectedColor("purple")}
				className={"light purple" + ((selectedColor === "purple") ? " glow" : "")}>
				</div>}
			</div>
			<div>
				<button onClick={cambiaColor}>Cambiar color</button>
				<button onClick={botonPurple}>Purpura</button>
			</div>
		</div>
	);
};

export default Home;
