import { Route, Routes } from 'react-router-dom';
import routes from './app/route';

const App = () => {
	return (
		<Routes>
			{routes.map(route => (
				<Route path={route.path} element={<route.element />} key={route.path} />
			))}
			{/* <Route path="/programming" element={<ProgrammingPage />} />
			<Route path="/covid" element={<CovidPage />} />
			<Route path="/search/:keyword" element={<SearchPage />} />
			<Route path="/saved" element={<SavedPage />} /> */}
		</Routes>
	);
};

export default App;
