import React, { useState } from 'react';
import DateForm from './DateForm';
import Missing from './Missing';
import SingleForm from './SingleForm';
import BadgeForm from './BadgeForm';
import MultipleBadgeForm from './MultipleBadgeForm';
import TimeForm from './TimeForm';
import { GROUPS } from '../../constants/GROUPS';
import { SUBJECTS } from '../../constants/SUBJECTS';
import { SKILLS } from '../../constants/SKILLS';
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

	return (() => {
		switch (reportState.show) {
			case 'title':
				return (
					<SingleForm
						placeholder='title'
						errorMessage='Please enter a title'
						onEnter={(value) => handleReportFormSubmit('title', value, 'date')}
					/>
				);
			case 'date':
				return <DateForm onEnter={(value) => handleReportFormSubmit('date', value, 'group')} />;
			case 'group':
				return (
					<BadgeForm
						badges={GROUPS}
						onEnter={(value) => handleReportFormSubmit('group', value, 'startTime')}
						placeholder='group'
						errorMessage='Please choose a group'
						nestedProperty='name'
					/>
				);
			case 'startTime':
				return (
					<TimeForm
						onEnter={(value) => handleReportFormSubmit('startTime', value, 'endTime')}
						placeholder='start time'
					/>
				);
			case 'endTime':
				return (
					<TimeForm
						onEnter={(value) => handleReportFormSubmit('endTime', value, 'teachers')}
						placeholder='end time'
					/>
				);
			case 'teachers':
				return (
					<MultipleBadgeForm
						onEnter={(value) => handleReportFormSubmit('teachers', value, 'support')}
						isMandatory
						placeholder='teachers'
						errorMessage='Please add teachers'
					/>
				);
			case 'support':
				return (
					<MultipleBadgeForm
						onEnter={(value) => handleReportFormSubmit('support', value, 'attendance')}
						placeholder='support staff'
						errorMessage='Please enter a support member'
					/>
				);
			case 'attendance':
				return (
					<SingleForm
						isNumeric
						placeholder='attendance'
						errorMessage='Please enter a number'
						onEnter={(value) => handleReportFormSubmit('attendance', value, 'missing')}
					/>
				);
			case 'missing':
				return <Missing onEnter={(value) => handleReportFormSubmit('missing', value, 'subject')} />;
			case 'subject':
				return (
					<BadgeForm
						badges={SUBJECTS}
						onEnter={(value) => handleReportFormSubmit('subject', value, 'skill')}
						placeholder='subject'
						errorMessage='Please choose a subject'
					/>
				);
			case 'skill':
				return (
					<BadgeForm
						badges={SKILLS}
						onEnter={(value) => handleReportFormSubmit('skill', value, 'muscle')}
						placeholder='skill'
						errorMessage='Please choose a skill'
					/>
				);
			case 'muscle':
				return (
					<SingleForm
						placeholder='muscle'
						errorMessage='Please enter a muscle'
						onEnter={(value) => handleReportFormSubmit('muscle', value, 'technique')}
					/>
				);
			case 'technique':
				return (
					<SingleForm
						placeholder='technique'
						errorMessage='Please enter a technique'
						onEnter={(value) => handleReportFormSubmit('technique', value, 'notes')}
					/>
				);
			case 'notes':
				return (
					<MultipleBadgeForm
						onEnter={(value) => handleReportFormSubmit('notes', value, 'actionItems')}
						placeholder='extra note'
						errorMessage='Please enter a note'
						isList
					/>
				);
			case 'actionItems':
				return (
					<MultipleBadgeForm
						onEnter={(value) => handleReportFormSubmit('actionItems', value, '', true)}
						placeholder='action item'
						errorMessage='Please enter an action item'
						isList
					/>
				);
		}
	})();
};

export default ReportGenerator;
