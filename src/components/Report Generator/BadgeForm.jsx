import React, { useRef, useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import Button from '../Buttons/Button';
import './BadgeForm.css';

const BadgeForm = ({ badges, onEnter, placeholder, errorMessage, nestedProperty = false }) => {
	const BADGES = badges;
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const inputRef = useRef(null);

	const handleSubmit = () => {
		if (value.length === 0 || (nestedProperty && value[`${nestedProperty}`].length === 0)) {
			setError(true);
			return;
		}

		setError(false);
		onEnter(value);
		setValue('');
		inputRef.current.value = '';
	};

	const handleBadgeSelect = (badge) => setValue(badge);

	return (
		<div className='report-form badge-form'>
			<div className='report-input'>
				<span className='report-placeholder active'>{placeholder}</span>

				<input
					type='text'
					disabled
					value={nestedProperty ? value[`${nestedProperty}`] : value}
					ref={inputRef}
				/>

				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>{errorMessage}</p>
			</div>

			<div className='badge-container'>
				{BADGES.map((v) => (
					<Button
						key={nestedProperty ? v[`${nestedProperty}`] : v}
						text={nestedProperty ? v[`${nestedProperty}`] : v}
						extraClasses={'badge'}
						executeOnClick={() => handleBadgeSelect(v)}
					/>
				))}
			</div>
		</div>
	);
};

export default BadgeForm;
