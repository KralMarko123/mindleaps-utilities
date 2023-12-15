import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import './Title.css';

const Title = ({ onEnter }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		const newTitle = e.currentTarget.value;

		setTitle((prev) => newTitle);
	};

	const handleSubmit = () => {
		if (title.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter('title', title);
	};

	return (
		<div className='title-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span className={`report-placeholder${title.length > 0 ? ' active' : ''}`}>Title</span>
				<input type='text' onChange={(e) => handleInputChange(e)} maxLength={10} />
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>Please enter a title</p>
			</div>
		</div>
	);
};

export default Title;
