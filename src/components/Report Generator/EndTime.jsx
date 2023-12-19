import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './Time.css';

const EndTime = ({ onEnter }) => {
	const [endTime, setEndTime] = useState(new Date());

	const handleSubmit = () => {
		onEnter(endTime);
	};

	return (
		<div className='time-form'>
			<span className='report-placeholder active'>End Time</span>

			<TimePicker
				disableClock={true}
				hourPlaceholder='HH'
				minutePlaceholder='mm'
				maxDetail='minute'
				className={'start-time'}
				clearIcon={null}
				value={endTime}
				onChange={(newTime) => setEndTime(newTime)}
			/>

			<span className={`report-submit`} onClick={() => handleSubmit()}>
				<TbArrowRight />
			</span>
		</div>
	);
};

export default EndTime;
