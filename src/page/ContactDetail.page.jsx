/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactDetailService } from "../service/contact.service";
import { LoadingComponent } from "../Components";

const ContactDetailPage = () => {
	const { id } = useParams();

	const [detailData, setDetailData] = useState({
		loading: true,
		data: null,
		error: null,
	});

	useEffect(() => {
		(async () => {
			setDetailData((pre) => ({ ...pre, loading: true }));

			const res = await ContactDetailService(id);
			console.log(res);
			if (res.error) {
				setDetailData((pre) => ({ ...pre, loading: false, error: res.error }));
			} else {
				setDetailData((pre) => ({
					...pre,
					loading: false,
					data: res.data,
				}));
			}
		})();
	}, [id]);

	return (
		<div className="Center">
			{detailData.loading ? (
				<LoadingComponent />
			) : (
				<>
					<h1 className="mx-auto">{detailData?.data.email}</h1>
				</>
			)}
		</div>
	);
};

export default ContactDetailPage;
