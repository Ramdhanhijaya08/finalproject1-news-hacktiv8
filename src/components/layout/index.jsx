import { Helmet } from 'react-helmet-async';
import Nav from './Nav';

const Layout = ({ children, title }) => {
	return (
		<>
			<Helmet>
				<title>{title ? `Newsly | ${title}` : 'Newsly'}</title>
			</Helmet>
			<Nav />
			<main className="layout my-24">{children}</main>
		</>
	);
};

export default Layout;
