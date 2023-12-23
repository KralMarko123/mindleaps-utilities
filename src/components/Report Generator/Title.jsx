import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';

const Title = ({ onEnter }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [error, setError] = useState(false);

	const handleInputChange = (e) => {
		const newTitle = e.currentTarget.value;

		setTitle(newTitle);
	};

	const handleSubmit = () => {
		if (title.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter(title);
	};

	const handleKeyDown = (e) => {
		if (e.code === 'Enter') handleSubmit();
	};

	return (
		<div className='title-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span className={`report-placeholder${title.length > 0 ? ' active' : ''}`}>Title</span>
				<input
					type='text'
					onChange={(e) => handleInputChange(e)}
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
				<p className={`report-error${error ? ' show' : ''}`}>Please enter a title</p>
			</div>
		</div>
	);
};

export default Title;
