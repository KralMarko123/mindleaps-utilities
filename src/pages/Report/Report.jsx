import React, { useState } from 'react';
import BackButton from '../../components/Buttons/BackButton';
import ReportGenerator from '../../components/Report Generator/ReportGenerator';
import { getCopyableReport } from '../../util/HELPER_FUNCTIONS';
import { TEMPLATE_REPORT } from '../../constants/MISC';
import { TbCopy } from 'react-icons/tb';
import './Report.css';
import '../page.css';

const Report = () => {
	const [generatedReport, setGeneratedReport] = useState(TEMPLATE_REPORT);
	return (
		<div className='report page'>
			<BackButton />

			<h1 className='title'>Generate Report</h1>
			<p className='desc'>Fill out information here to generate a report</p>

			{!generatedReport ? (
				<ReportGenerator onSubmit={(report) => setGeneratedReport(report)} />
			) : (
				<div className='generatedreport'>
					{getCopyableReport(generatedReport)}
					<span
						className='copy-report'
						onClick={() => {
							navigator.clipboard.writeText(getCopyableReport(generatedReport));
						}}
					>
						Copy <TbCopy />
					</span>
				</div>
			)}
		</div>
	);
};

export default Report;
