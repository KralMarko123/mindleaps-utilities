import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './Button.css';
import './BackButton.css';

const BackButton = () => {
	const EXTRA_CLASSES = 'back';
	const navigate = useNavigate();

	return <Button text={'Back'} executeOnClick={() => navigate(-1)} extraClasses={EXTRA_CLASSES} />;
};

export default BackButton;
