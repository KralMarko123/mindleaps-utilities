import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import { GROUPS } from '../../constants/GROUPS';
import Button from '../Buttons/Button';
import './Group.css';

const Group = ({ onEnter }) => {
	const [group, setGroup] = useState({
		name: '',
		numberOfStudents: NaN
	});
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		if (group.name.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter(group);
	};

	const handleGroupSelect = (newGroup) => {
		setGroup({ ...newGroup });
	};

	const handleKeyDown = (e) => {
		if (e.code === 'Enter') handleSubmit();
	};

	return (
		<div className='group-form'>
			<div className='report-input'>
				<span className='report-placeholder active'>Group</span>

				<input
					type='text'
					disabled
					value={group.name}
					placeholder='Select one of the options below'
				/>

				<span
					className={`report-submit`}
					onClick={() => handleSubmit()}
					tabIndex={0}
					onKeyDown={(e) => handleKeyDown(e)}
				>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>Please choose a group</p>
			</div>

			<div className='badge-container'>
				{GROUPS.map((g) => (
					<Button
						key={g.name}
						text={g.name}
						extraClasses={'badge group-badge'}
						executeOnClick={() => handleGroupSelect(g)}
					/>
				))}
			</div>
		</div>
	);
};

export default Group;
