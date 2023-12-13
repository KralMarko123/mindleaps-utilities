import React, { useState } from 'react';
import Title from './Title';
import './ReportGenerator.css';

const ReportGenerator = () => {
	const [title, setTitle] = useState(null);

	const handleTitleSubmit = (title) => setTitle(title);
	return (
		<div className='report-form'>
			{!title && <Title onEnter={(title) => handleTitleSubmit(title)} />}
		</div>
	);
};

export default ReportGenerator;
