import React, { useState } from 'react';
import Title from './Title';
import DateSelection from './DateSelection';
import Group from './Group';
import StartTime from './StartTime';
import './ReportGenerator.css';

const ReportGenerator = () => {
	const [reportState, setReportState] = useState({
		title: 1,
		date: 1,
		group: 1,
		startTime: null
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
				<DateSelection onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.date && !reportState.group && (
				<Group onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.group && !reportState.startTime && (
				<StartTime onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}
		</div>
	);
};

export default ReportGenerator;
