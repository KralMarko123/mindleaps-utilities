import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';

const Attendance = ({ onEnter }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [attendance, setAttendance] = useState('');
	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		const newAttendance = e.currentTarget.value;

		setAttendance((prev) => newAttendance);
	};

	const handleSubmit = () => {
		if (attendance.length === 0 || isNaN(attendance)) {
			setError(true);
			return;
		}

		setError(false);
		onEnter('attendance', attendance);
	};

	return (
		<div className='title-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span className={`report-placeholder${attendance.length > 0 ? ' active' : ''}`}>
					Attendance
				</span>
				<input type='text' onChange={(e) => handleInputChange(e)} maxLength={10} />
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>Please enter a number</p>
			</div>
		</div>
	);
};

export default Attendance;
