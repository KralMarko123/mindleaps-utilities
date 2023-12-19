import React, { useState, useRef } from 'react';
import { TbArrowRight, TbPlus } from 'react-icons/tb';
import Button from '../Buttons/Button';
import './FormWithBadges.css';
import './ActionItems.css';

const ActionItems = ({ onEnter }) => {
	const actionItemRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [error, setError] = useState(false);
	const [actionItems, setActionItems] = useState([]);

	const handleSubmit = () => {
		onEnter(actionItems);
	};

	const handleAdd = () => {
		const actionItemToBeAdded = actionItemRef.current.value;

		if (actionItemToBeAdded.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		setActionItems([...actionItems, actionItemToBeAdded]);
		actionItemRef.current.value = '';
	};

	const handleRemove = (actionItemToBeRemoved) => {
		setActionItems([...actionItems].filter((ai) => ai != actionItemToBeRemoved));
	};

	return (
		<div className='badge-form actionitem-form'>
			<div
				className={`report-input${isOpen ? ' open' : ''}`}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<span
					className={`report-placeholder${
						actionItemRef.current?.value.length > 0 ? ' active' : ''
					}`}
				>
					Action Item
				</span>

				<input type='text' ref={actionItemRef} maxLength={20} />

				<span className={`report-submit report-add`} onClick={() => handleAdd()}>
					<TbPlus />
				</span>
				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>

				<p className={`report-error${error ? ' show' : ''}`}>Please enter an action item</p>
			</div>

			<div className='badge-container actionitem-container'>
				{actionItems.map((ai) => (
					<Button
						key={ai}
						text={ai}
						extraClasses={'badge actionitem-badge'}
						executeOnClick={() => handleRemove(ai)}
					/>
				))}
			</div>
		</div>
	);
};

export default ActionItems;
