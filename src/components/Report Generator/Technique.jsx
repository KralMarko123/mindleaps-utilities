import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';

const Technique = ({ onEnter }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [technique, setTechnique] = useState('');
	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		const newTechnique = e.currentTarget.value;

		setTechnique(newTechnique);
	};

	const handleSubmit = () => {
		if (technique.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter(technique);
	};

	return (
		<div className='technique-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span className={`report-placeholder${technique.length > 0 ? ' active' : ''}`}>
					Technique
				</span>
				<input type='text' onChange={(e) => handleInputChange(e)} />
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>Please enter a technique</p>
			</div>
		</div>
	);
};

export default Technique;
