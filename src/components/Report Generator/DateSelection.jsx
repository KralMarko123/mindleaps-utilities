import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import DatePicker from 'react-datepicker';
import './ReportGenerator.css';
import './DateSelection.css';

const DateSelection = ({ onEnter }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [date, setDate] = useState(new Date());
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		if (date.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter('date', date);
	};

	return (
		<>
			<div className='date-form'>
				<DatePicker selected={date} onChange={(newDate) => setDate(newDate)} />
			</div>
		</>
	);
};

export default DateSelection;
