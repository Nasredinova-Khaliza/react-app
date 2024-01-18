import React from "react";
import "./Button.css";

const Button = ({ onClick, text, className }) => {
	return (
		<div>
			<button className={className} onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

export default Button;
