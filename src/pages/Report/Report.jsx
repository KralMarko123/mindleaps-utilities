import React from 'react';
import BackButton from '../../components/Buttons/BackButton';
import ReportGenerator from '../../components/Report Generator/ReportGenerator';
import './Report.css';
import '../page.css';

const Report = () => {
	return (
		<div className='report page'>
			<BackButton />

			<h1 className='title'>Generate Report</h1>
			<p className='desc'>Fill out information here to generate a report</p>

			<ReportGenerator />
		</div>
	);
};

export default Report;
