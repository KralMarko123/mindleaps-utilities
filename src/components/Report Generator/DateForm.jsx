import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateForm.css';

const DateForm = ({ onEnter }) => {
	const [date, setDate] = useState(new Date());

	const handleSubmit = () => {
		onEnter(date);
	};

	const handleKeyDown = (e) => {
		if (e.code === 'Enter') handleSubmit();
	};

	return (
		<div className='report-form'>
			<span className='report-placeholder active'>Date</span>

			<DatePicker
				selected={date}
				onChange={(newDate) => setDate(newDate)}
				minDate={new Date()}
				className='date-selection__input'
				autoFocus
				tabIndex={0}
				onKeyDown={(e) => handleKeyDown(e)}
			/>

			<span
				className={`report-submit`}
				onClick={() => handleSubmit()}
				tabIndex={0}
				onKeyDown={(e) => handleKeyDown(e)}
			>
				<TbArrowRight />
			</span>
		</div>
	);
};

export default DateForm;
