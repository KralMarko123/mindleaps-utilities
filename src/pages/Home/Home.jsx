import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/ROUTES';
import '../page.css';
import './Home.css';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className='page'>
			<h1 className='title'>
				<span>Mind</span>
				<span>Leaps</span> Utilities
			</h1>
			<p className='desc'>
				Need some useful links or tools to help you during the program? Feel free to use anything
				you find here!
			</p>

			<div className='button-container'>
				<button className='button' onClick={() => navigate(ROUTES.LINKS)}>
					Useful links
				</button>
				<button className='button'>Class report generator</button>
			</div>
		</div>
	);
};

export default Home;
