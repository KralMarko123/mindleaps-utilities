import React, { useState } from 'react';
import Title from './Title';
import DateSelection from './DateSelection';
import Group from './Group';
import StartTime from './StartTime';
import EndTime from './EndTime';
import Teachers from './Teachers';
import SupportStaff from './SupportStaff';
import Attendance from './Attendance';
import Missing from './Missing';
import './ReportGenerator.css';

const ReportGenerator = () => {
	const [reportState, setReportState] = useState({
		title: 1,
		date: 1,
		group: 1,
		startTime: 1,
		endTime: 1,
		teachers: 1,
		support: 1,
		attendance: 1,
		missing: null
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

			{reportState.startTime && !reportState.endTime && (
				<EndTime onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.endTime && !reportState.teachers && (
				<Teachers onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.teachers && !reportState.support && (
				<SupportStaff onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.support && !reportState.attendance && (
				<Attendance onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.attendance && !reportState.missing && (
				<Missing onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}
		</div>
	);
};

export default ReportGenerator;
