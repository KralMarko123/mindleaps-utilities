import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './TimeForm.css';

const TimeForm = ({ onEnter, placeholder }) => {
	const [time, setTime] = useState(new Date());

	const handleSubmit = () => {
		onEnter(time);
	};

	return (
		<div className='report-form time-form'>
			<span className='report-placeholder active'>{placeholder}</span>

			<TimePicker
				disableClock={true}
				hourPlaceholder='HH'
				minutePlaceholder='mm'
				maxDetail='minute'
				className={'input-time'}
				clearIcon={null}
				value={time}
				onChange={(newTime) => setTime(newTime)}
			/>

			<span className={`report-submit`} onClick={() => handleSubmit()}>
				<TbArrowRight />
			</span>
		</div>
	);
};

export default TimeForm;
