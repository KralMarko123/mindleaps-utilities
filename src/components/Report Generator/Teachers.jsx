import React, { useState, useRef } from 'react';
import { TbArrowRight, TbPlus } from 'react-icons/tb';
import Button from '../Buttons/Button';
import './FormWithBadges.css';

const Teachers = ({ onEnter }) => {
	const teacherRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [teachers, setTeachers] = useState([]);
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		if (teachers.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter(teachers);
	};

	const handleAdd = () => {
		const teacherToBeAdded = teacherRef.current.value;

		if (teacherToBeAdded.length === 0) {
			setError(true);
			return;
		}

		setTeachers([...teachers, teacherToBeAdded]);
		teacherRef.current.value = '';
	};

	const handleRemove = (teachertoBeRemoved) => {
		setTeachers([...teachers].filter((t) => t != teachertoBeRemoved));
	};

	return (
		<div className='badge-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span
					className={`report-placeholder${teacherRef.current?.value.length > 0 ? ' active' : ''}`}
				>
					Teachers
				</span>
				<input type='text' ref={teacherRef} maxLength={20} />

				<span className={`report-submit report-add`} onClick={() => handleAdd()}>
					<TbPlus />
				</span>
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>Please add teachers</p>
			</div>

			<div className='badge-container'>
				{teachers.map((t) => (
					<Button
						key={t}
						text={t}
						extraClasses={'badge teacher-badge'}
						executeOnClick={() => handleRemove(t)}
					/>
				))}
			</div>
		</div>
	);
};

export default Teachers;
