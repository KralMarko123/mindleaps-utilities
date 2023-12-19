import React, { useState, useRef } from 'react';
import { TbArrowRight, TbPlus } from 'react-icons/tb';
import Button from '../Buttons/Button';
import './FormWithBadges.css';
import './Missing.css';

const Missing = ({ onEnter }) => {
	const missingStudentRef = useRef();
	const reasonRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [isReasonOpen, setIsReasonOpen] = useState(false);
	const [error, setError] = useState(false);
	const [missing, setMissing] = useState([]);

	const handleSubmit = () => {
		onEnter(missing);
	};

	const handleAdd = () => {
		const missingToBeAdded = missingStudentRef.current.value;
		const reasonToBeAdded = reasonRef.current.value;

		if (missingToBeAdded.length === 0) {
			setError(true);
			return;
		}

		const toAdd = {
			name: missingToBeAdded,
			reason: reasonToBeAdded
		};

		setError(false);
		setMissing([...missing, toAdd]);
		missingStudentRef.current.value = '';
		reasonRef.current.value = '';
	};

	const handleRemove = (missingToBeRemoved) => {
		setMissing([...missing].filter((m) => m.name != missingToBeRemoved.name));
	};

	return (
		<div className='badge-form missing-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span
					className={`report-placeholder${
						missingStudentRef.current?.value.length > 0 ? ' active' : ''
					}`}
				>
					Missing Student
				</span>

				<input type='text' ref={missingStudentRef} maxLength={20} />

				<span className={`report-submit report-add`} onClick={() => handleAdd()}>
					<TbPlus />
				</span>
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>

				<p className={`report-error${error ? ' show' : ''}`}>Please enter a student</p>
			</div>

			<div
				className={`report-input${isReasonOpen ? ' open' : ''}`}
				onFocus={() => setIsReasonOpen(true)}
				onBlur={() => setIsReasonOpen(false)}
			>
				<span
					className={`report-placeholder${reasonRef.current?.value.length > 0 ? ' active' : ''}`}
				>
					Reason
				</span>

				<input type='text' ref={reasonRef} />
			</div>

			<div className='badge-container missing-container'>
				{missing.map((m) => (
					<Button
						key={m.name}
						text={`${m.name}${m.reason.length > 0 ? ` - ${m.reason}` : ''}`}
						extraClasses={'badge missing-badge'}
						executeOnClick={() => handleRemove(m)}
					/>
				))}
			</div>
		</div>
	);
};

export default Missing;
