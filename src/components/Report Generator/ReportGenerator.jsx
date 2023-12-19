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
		title: '',
		date: new Date(),
		group: [],
		startTime: new Date(),
		endTime: new Date(),
		teachers: [],
		support: [],
		attendance: null,
		missing: [],
		subject: '',
		skill: '',
		muscle: '',
		technique: '',
		notes: [],
		actionItems: [],
		show: 'title',
		isCompleted: false
	});

	const handleReportFormSubmit = (key, value, showNext, shouldComplete = false) => {
		let newReportState = reportState;

		newReportState[`${key}`] = value;
		newReportState.show = showNext;
		newReportState.isCompleted = shouldComplete;
		setReportState({ ...newReportState });

		if (shouldComplete) onSubmit(reportState);
	};

	return (
		<div className='report-form'>
			{(() => {
				switch (reportState.show) {
					case 'title':
						return <Title onEnter={(value) => handleReportFormSubmit('title', value, 'date')} />;
					case 'date':
						return (
							<DateSelection onEnter={(value) => handleReportFormSubmit('date', value, 'group')} />
						);
					case 'group':
						return (
							<Group onEnter={(value) => handleReportFormSubmit('group', value, 'startTime')} />
						);
					case 'startTime':
						return (
							<StartTime
								onEnter={(value) => handleReportFormSubmit('startTime', value, 'endTime')}
							/>
						);
					case 'endTime':
						return (
							<EndTime onEnter={(value) => handleReportFormSubmit('endTime', value, 'teachers')} />
						);
					case 'teachers':
						return (
							<Teachers onEnter={(value) => handleReportFormSubmit('teachers', value, 'support')} />
						);
					case 'support':
						return (
							<SupportStaff
								onEnter={(value) => handleReportFormSubmit('support', value, 'attendance')}
							/>
						);
					case 'attendance':
						return (
							<Attendance
								onEnter={(value) => handleReportFormSubmit('attendance', value, 'missing')}
							/>
						);
					case 'missing':
						return (
							<Missing onEnter={(value) => handleReportFormSubmit('missing', value, 'subject')} />
						);
					case 'subject':
						return (
							<Subject onEnter={(value) => handleReportFormSubmit('subject', value, 'skill')} />
						);
					case 'skill':
						return <Skill onEnter={(value) => handleReportFormSubmit('skill', value, 'muscle')} />;
					case 'muscle':
						return (
							<Muscle onEnter={(value) => handleReportFormSubmit('muscle', value, 'technique')} />
						);
					case 'technique':
						return (
							<Technique onEnter={(value) => handleReportFormSubmit('technique', value, 'notes')} />
						);
					case 'notes':
						return (
							<ExtraNotes
								onEnter={(value) => handleReportFormSubmit('notes', value, 'actionItems')}
							/>
						);
					case 'actionItems':
						return (
							<ActionItems
								onEnter={(value) => handleReportFormSubmit('actionItems', value, '', true)}
							/>
						);
				}
			})()}
		</div>
	);
};

export default ReportGenerator;
