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
import Subject from './Subject';
import Skill from './Skill';
import Muscle from './Muscle';
import Technique from './Technique';
import ExtraNotes from './ExtraNotes';
import ActionItems from './ActionItems';
import './ReportGenerator.css';

const ReportGenerator = ({ onSubmit }) => {
	const [reportState, setReportState] = useState({
		title: null,
		date: null,
		group: null,
		startTime: null,
		endTime: null,
		teachers: null,
		support: null,
		attendance: null,
		missing: null,
		subject: null,
		skill: null,
		muscle: null,
		technique: null,
		notes: null,
		actionItems: null
	});

	const handleReportFormSubmit = (key, value) => {
		let newReportState = reportState;
		newReportState[`${key}`] = value;

		setReportState({ ...newReportState });
		if (Object.values(reportState).every((v) => v != null)) {
			onSubmit(reportState);
		}
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

			{reportState.missing && !reportState.subject && (
				<Subject onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.subject && !reportState.skill && (
				<Skill onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.skill && !reportState.muscle && (
				<Muscle onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.muscle && !reportState.technique && (
				<Technique onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.technique && !reportState.notes && (
				<ExtraNotes onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}

			{reportState.notes && !reportState.actionItems && (
				<ActionItems onEnter={(key, value) => handleReportFormSubmit(key, value)} />
			)}
		</div>
	);
};

export default ReportGenerator;
