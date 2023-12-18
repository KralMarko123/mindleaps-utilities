import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';

const Muscle = ({ onEnter }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [muscle, setMuscle] = useState('');
	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		const newMuscle = e.currentTarget.value;

		setMuscle((prev) => newMuscle);
	};

	const handleSubmit = () => {
		if (muscle.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter('muscle', muscle);
	};

	return (
		<div className='muscle-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span className={`report-placeholder${muscle.length > 0 ? ' active' : ''}`}>Muscle</span>
				<input type='text' onChange={(e) => handleInputChange(e)} />
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>Please enter a muscle</p>
			</div>
		</div>
	);
};

export default Muscle;
