import CovidPage from '../pages/Covid';
import HomePage from '../pages/Home';
import ProgrammingPage from '../pages/Programming';
import SavedPage from '../pages/Saved';
import SearchPage from '../pages/Search';
import LoginPage from '../pages/Login';

const routes = [
	{
		path: '/',
		element: HomePage,
	},
	{
		path: '/programming',
		element: ProgrammingPage,
	},
	{
		path: '/covid',
		element: CovidPage,
	},
	{
		path: '/search/:keyword',
		element: SearchPage,
	},
	{
		path: '/saved',
		element: SavedPage,
	},
	{
		path: '/login',
		element : LoginPage, 
	},
];

export default routes;
