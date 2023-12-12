import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/ROUTES';
import Home from './pages/Home/Home';
import Links from './pages/Links/Links';

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.LINKS} element={<Links />} />

			</Routes>
		</BrowserRouter>
	);
};

export default App;
