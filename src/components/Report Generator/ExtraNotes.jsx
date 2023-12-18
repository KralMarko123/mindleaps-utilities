import React, { useState, useRef } from 'react';
import { TbArrowRight, TbPlus } from 'react-icons/tb';
import Button from '../Buttons/Button';
import './FormWithBadges.css';
import './ExtraNotes.css';

const ExtraNotes = ({ onEnter }) => {
	const noteRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState(false);
	const [notes, setNotes] = useState([]);

	const handleSubmit = () => {
		onEnter('notes', notes);
	};

	const handleAdd = () => {
		const noteToBeAdded = noteRef.current.value;

		if (noteToBeAdded.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		setNotes([...notes, noteToBeAdded]);
		noteRef.current.value = '';
	};

	const handleRemove = (noteToBeRemoved) => {
		setNotes([...notes].filter((n) => n != noteToBeRemoved));
	};

	return (
		<div className='badge-form note-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span className={`report-placeholder${noteRef.current?.value.length > 0 ? ' active' : ''}`}>
					Extra Note
				</span>

				<input type='text' ref={noteRef} />

				<span className={`report-submit report-add`} onClick={() => handleAdd()}>
					<TbPlus />
				</span>
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>

				<p className={`report-error${error ? ' show' : ''}`}>Please enter a note</p>
			</div>

			<div className='badge-container note-container'>
				{notes.map((n) => (
					<Button
						key={n}
						text={n}
						extraClasses={'badge note-badge'}
						executeOnClick={() => handleRemove(n)}
					/>
				))}
			</div>
		</div>
	);
};

export default ExtraNotes;
