import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/ROUTES';
import Home from './pages/Home';

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
