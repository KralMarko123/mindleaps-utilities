import React, { useState } from 'react';
import Title from './Title';
import Date from './Date';
import './ReportGenerator.css';

const ReportGenerator = () => {
	const [reportState, setReportState] = useState({
		title: null,
		date: null
	});

	const handleReportFormSubmit = (key, value) => {
		let newReportState = reportState;
		newReportState[`${key}`] = value;

		setReportState({ ...newReportState });
	};

	return (
		<div className='report-form'>
			{!reportState.title && <Title onEnter={(key, value) => handleReportFormSubmit(key, value)} />}

			{reportState.title && !reportState.date && (
				<Date onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}
		</div>
	);
};

export default ReportGenerator;
