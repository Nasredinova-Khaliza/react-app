import React from "react";

const Input = ({ type, text, value, className }) => {
	return (
		<div>
			<input type={type} placeholder={text} ref={value} className={className} />
		</div>
	);
};

export default Input;
