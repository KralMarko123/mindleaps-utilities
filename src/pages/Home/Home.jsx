import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/ROUTES';
import Button from '../../components/Buttons/Button';
import '../page.css';
import './Home.css';

const Home = () => {
	const navigate = useNavigate();

	return (
		<div className='home page'>
			<h1 className='title'>
				<span>Mind</span>
				<span>Leaps</span> Utilities
			</h1>
			<p className='desc'>
				Need some useful links or tools to help you during the program? Feel free to use anything
				you find here!
			</p>

			<div className='menu-container'>
				<Button text={'Useful Links'} executeOnClick={() => navigate(ROUTES.LINKS)} />
				<Button text={'Class report generator'} executeOnClick={() => navigate(ROUTES.REPORT)} />
			</div>
		</div>
	);
};

export default Home;
