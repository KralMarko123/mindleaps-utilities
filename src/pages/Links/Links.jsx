import React from 'react';
import ButtonLink from '../../components/Buttons/ButtonLink';
import BackButton from '../../components/Buttons/BackButton';
import { LINKS } from '../../constants/LINKS';
import '../page.css';
import './Links.css';

const Links = () => {
	return (
		<div className='links page'>
			<BackButton />
			<h1 className='title'>Useful Links</h1>
			<p className='desc'>Clicking on a link opens up a new tab</p>

			<div className='links-dashboard'>
				{LINKS.map((l) => (
					<ButtonLink title={l.title} icon={l.icon} url={l.url} />
				))}
			</div>
		</div>
	);
};

export default Links;
