import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import { SKILLS } from '../../constants/SKILLS';
import Button from '../Buttons/Button';

const Skill = ({ onEnter }) => {
	const [skill, setSkill] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = () => {
		if (skill.length === 0) {
			setError(true);
			return;
		}

		setError(false);
		onEnter('skill', skill);
	};

	const handleSkillSelect = (newSkill) => setSkill(newSkill);

	return (
		<div className='badge-form skill-form'>
			<div className='report-input'>
				<span className='report-placeholder active'>Skill</span>

				<input type='text' disabled value={skill} />

				<span className={`report-submit`} onClick={() => handleSubmit()}>
					<TbArrowRight />
				</span>
				<p className={`report-error${error ? ' show' : ''}`}>Please choose a skill</p>
			</div>

			<div className='badge-container'>
				{SKILLS.map((s) => (
					<Button
						key={s}
						text={s}
						extraClasses={'badge skill-badge'}
						executeOnClick={() => handleSkillSelect(s)}
					/>
				))}
			</div>
		</div>
	);
};

export default Skill;
