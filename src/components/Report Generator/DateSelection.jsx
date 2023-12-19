import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelection.css';

const DateSelection = ({ onEnter }) => {
	const [date, setDate] = useState(new Date());

	const handleSubmit = () => {
		onEnter(date);
	};

	return (
		<div className='date-form'>
			<span className='report-placeholder active'>Date</span>

			<DatePicker
				selected={date}
				onChange={(newDate) => setDate(newDate)}
				minDate={new Date()}
				className='date-selection__input'
			/>

			<span className={`report-submit`} onClick={() => handleSubmit()}>
				<TbArrowRight />
			</span>
		</div>
	);
};

export default DateSelection;
