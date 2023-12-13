import React from 'react';
import './ButtonLink.css';

const ButtonLink = ({ icon, title, url }) => {
	return (
		<a className='link-container' target='_blank' href={url}>
			<div className='link-icon'>{icon}</div>
			<p className='link-title'>{title}</p>
		</a>
	);
};

export default ButtonLink;
