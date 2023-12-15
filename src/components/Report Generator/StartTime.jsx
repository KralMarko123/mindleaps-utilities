import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import './StartTime.css';

const StartTime = ({ onEnter }) => {
	const [startTime, setStartTime] = useState(new Date());

	const handleSubmit = () => {
		onEnter('startTime', startTime);
	};

	return (
		<>
			<div className='time-form'>
				<span className='report-placeholder active'>Time</span>

				<TimePicker
					disableClock={true}
					hourPlaceholder='HH'
					minutePlaceholder='mm'
					maxDetail='minute'
					className={'start-time'}
					clearIcon={null}
					value={startTime}
					onChange={(newTime) => setStartTime(newTime)}
				/>

				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
			</div>
		</>
	);
};

export default StartTime;
