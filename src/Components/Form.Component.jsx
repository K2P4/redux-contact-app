/** @format */

import React from "react";

const FormComponent = ({ name, type, label, placeholder = "", onChange }) => {
	return (
		<div className="flex  flex-col   space-y-3  mb-2 ">
			<label htmlFor={name}>{label}</label>
			<input
				className="border-blue-400 border p-2 rounded-md   focus:border-0  "
				type={type}
				onChange={onChange}
				
				id={name}
				name={name}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default FormComponent;
