/** @format */

import React, { useEffect, useState } from "react";
import {
	ContactDeleteService,
	ContactService,
} from "../service/contact.service";
import {
	ContactComponent,
	ErrorComponent,
	LoadingComponent,
} from "../Components";

const ContactPage = () => {
	const [contactItem, setContactItem] = useState({
		data: null,
		loading: true,
		error: null,
	});

	const [deleteItem, setDeleteItem] = useState(false);

	useEffect(() => {
		(async () => {
			setContactItem((pre) => ({ ...pre, loading: true }));

			const res = await ContactService();
			console.log(res);
			if (res.error) {
				setContactItem((pre) => ({ ...pre, loading: false, error: res.error }));
			} else {
				setContactItem((pre) => ({
					...pre,
					loading: false,
					data: res.data,
				}));
			}
		})();
	}, [deleteItem]);

	const handleDelete = async (id) => {
		await ContactDeleteService(id);
		setDeleteItem((pre) => !pre);
	};
	return (
		<div className="Center  overflow-scroll ">
			{contactItem.loading ? (
				<LoadingComponent />
			) : (
				<>
					{contactItem.error ? (
						<ErrorComponent />
					) : (
						<div className="mx-auto ">
							{contactItem?.data.map((item) => (
								<ContactComponent
									key={item.id}
									handleDelete={handleDelete}
									item={item}
								/>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default ContactPage;
