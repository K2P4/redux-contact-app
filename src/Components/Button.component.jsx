/** @format */

import React from "react";

const ButtonComponent = ({ label, type, name }) => {
	return (
		<button
			type={type}
			className=" bg-blue-400  mt-5  text-white  w-full text-center active:scale-95 p-2 rounded-md hover:bg-blue-500 active:ring-2 active:ring-blue-600 "
			name={name}>
			{label}
		</button>
	);
};

export default ButtonComponent;
