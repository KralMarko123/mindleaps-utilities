import React, { useRef, useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';

const SingleForm = ({ onEnter, placeholder, errorMessage, isNumeric = false }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const inputRef = useRef(null);

	const handleInputChange = (e) => setValue(e.currentTarget.value);

	const handleSubmit = () => {
		if (value.length === 0 || (isNumeric && isNaN(value))) {
			setError(true);
			return;
		}

		setError(false);
		onEnter(value);
		setValue('');
		inputRef.current.value = '';
	};

	return (
		<div className='report-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span className={`report-placeholder${value.length > 0 ? ' active' : ''}`}>
					{placeholder}
				</span>
				<input
					type='text'
					onChange={(e) => handleInputChange(e)}
					defaultValue={value}
					ref={inputRef}
				/>
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>{errorMessage}</p>
			</div>
		</div>
	);
};

export default SingleForm;
