import React from 'react';
import './ButtonLink.css';

const ButtonLink = ({ icon, title, url }) => {
	return (
		<a className='link-container' target='_blank' href={url}>
			<div className='link-icon'>{icon}</div>
			<div className='link-title'>
				<h3>{title}</h3>
			</div>
		</a>
	);
};

export default ButtonLink;
