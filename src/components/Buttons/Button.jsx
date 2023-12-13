import React from 'react';
import './Button.css';

const Button = ({ text, executeOnClick, extraClasses }) => {
	return (
		<button className={`button${extraClasses ? ` ${extraClasses}` : ''}`} onClick={executeOnClick}>
			{text}
		</button>
	);
};

export default Button;
