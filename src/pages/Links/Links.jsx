import React from 'react';
import { TbFileReport } from 'react-icons/tb';
import '../page.css';
import './Links.css';

const Links = () => {
	return (
		<div className='page'>
			<h1 className='title'>Useful Links</h1>
			<p className='desc'>Clicking on a link opens up a new tab</p>

			<div className='link-container'>
				<div className='link-icon'>
					<TbFileReport />
				</div>
				<p className='link-title'>Narrative Report</p>
			</div>
		</div>
	);
};

export default Links;
