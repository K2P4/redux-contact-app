/** @format */

import React, { useEffect, useState } from "react";
import { ButtonComponent, ErrorComponent, FormComponent } from "../Components";
import {
	ContactAddService,
	ContactEditService,
} from "../service/contact.service";
import { useNavigate, useLocation } from "react-router-dom";

const ContactAddPage = () => {
	const nav = useNavigate();
	const location = useLocation();

	const [formData, setFormData] = useState({
		email: "",
		phone: "",
		address: "",
		name: "",
	});

	useEffect(() => {
		if (location.state?.edit) {
			const { id, name, email, address } = location.state.item;

			setFormData({ name, email, address });
		}
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		let res;
		if (location.state?.edit) {
			res = await ContactEditService(location.state.id, formData);
		} else {
			res = await ContactAddService(formData);
		}
		console.log(res);

		if (res) {
			nav("/home");
		}
	};

	const handleInputChange = (e) => {
		setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
	};
	return (
		<div className=" Center ">
			<h1 className="text-2xl font-bold ">
				{location.state?.edit ? " Edit Your Contact " : "Create Your Contact"}
			</h1>

			<form className="" onSubmit={handleSubmit} action="">
				<FormComponent
					onChange={handleInputChange}
					value={formData.name}
					name="name"
					type="text"
					label={"Enter Your Name"}
				/>

				<FormComponent
					onChange={handleInputChange}
					value={formData.phone}
					name="phone"
					type="text"
					label={"Enter Your Phone "}
					placeholder=""
				/>

				<FormComponent
					value={formData.email}
					onChange={handleInputChange}
					type="email"
					name="email"
					label={"Enter Your Email "}
				/>

				<FormComponent
					onChange={handleInputChange}
					value={formData.address}
					name="address"
					type="text"
					label={"Enter Your Address "}
				/>

				<ButtonComponent
					type="submit"
					name="create"
					label={location.state?.edit ? "Edit Contact" : "Create Contact"}
				/>
			</form>
		</div>
	);
};

export default ContactAddPage;
