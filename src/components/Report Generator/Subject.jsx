import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import { SUBJECTS } from '../../constants/SUBJECTS';
import Button from '../Buttons/Button';

const Subject = ({ onEnter }) => {
	const [subject, setSubject] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		if (subject.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter('subject', subject);
	};

	const handleSubjectSelect = (newSubject) => setSubject(newSubject);

	return (
		<div className='badge-form subject-form'>
			<div className='report-input'>
				<span className='report-placeholder active'>Subject</span>

				<input type='text' disabled value={subject} />

				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>Please choose a subject</p>
			</div>

			<div className='badge-container'>
				{SUBJECTS.map((s) => (
					<Button
						key={s}
						text={s}
						extraClasses={'badge subject-badge'}
						executeOnClick={() => handleSubjectSelect(s)}
					/>
				))}
			</div>
		</div>
	);
};

export default Subject;
