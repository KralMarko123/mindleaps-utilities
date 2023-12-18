import React, { useState, useRef } from 'react';
import { TbArrowRight, TbPlus } from 'react-icons/tb';
import Button from '../Buttons/Button';
import './FormWithBadges.css';

const SupportStaff = ({ onEnter }) => {
	const supportRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [support, setSupport] = useState([]);
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		onEnter('support', support);
	};

	const handleAdd = () => {
		const supportToBeAdded = supportRef.current.value;

		if (supportToBeAdded.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		setSupport([...support, supportToBeAdded]);
		supportRef.current.value = '';
	};

	const handleRemove = (supportToBeRemoved) => {
		setSupport([...support].filter((s) => s != supportToBeRemoved));
	};

	return (
		<div className='badge-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span
					className={`report-placeholder${supportRef.current?.value.length > 0 ? ' active' : ''}`}
				>
					Support Staff
				</span>
				<input type='text' ref={supportRef} maxLength={20} />

				<span className={`report-submit report-add`} onClick={() => handleAdd()}>
					<TbPlus />
				</span>
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>

				<p className={`report-error${error ? ' show' : ''}`}>Please enter a support member</p>
			</div>

			<div className='badge-container'>
				{support.map((s) => (
					<Button
						key={s}
						text={s}
						extraClasses={'badge support-badge'}
						executeOnClick={() => handleRemove(s)}
					/>
				))}
			</div>
		</div>
	);
};

export default SupportStaff;
