import React, { useState, useRef } from 'react';
import { TbArrowRight, TbPlus } from 'react-icons/tb';
import Button from '../Buttons/Button';
import './MultipleBadgeForm.css';

const MultipleBadgeForm = ({
	onEnter,
	isMandatory = false,
	placeholder,
	errorMessage,
	isList = false
}) => {
	const inputRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [badges, setBadges] = useState([]);
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		if (!isMandatory) onEnter(badges);
		else if (badges.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter(badges);
		setBadges([]);
	};

	const handleAdd = () => {
		const badgeToAdd = inputRef.current.value;

		if (badgeToAdd.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		setBadges([...badges, badgeToAdd]);
		inputRef.current.value = '';
	};

	const handleRemove = (badgeToRemove) => {
		setBadges([...badges].filter((b) => b != badgeToRemove));
	};

	return (
		<div className='report-form badge-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span
					className={`report-placeholder${inputRef.current?.value.length > 0 ? ' active' : ''}`}
				>
					{placeholder}
				</span>
				<input type='text' ref={inputRef} />

				<span className={`report-submit report-add`} onClick={() => handleAdd()}>
					<TbPlus />
				</span>
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>{errorMessage}</p>
			</div>

			<div className={`badge-container${isList ? ' list-badge-container' : ''}`}>
				{badges.map((b) => (
					<Button
						key={b}
						text={b}
						extraClasses={`badge${isList ? ' list-badge' : ''}`}
						executeOnClick={() => handleRemove(b)}
					/>
				))}
			</div>
		</div>
	);
};

export default MultipleBadgeForm;
