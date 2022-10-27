import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { FiSearch } from 'react-icons/fi';
import { BsBookmark } from 'react-icons/bs';
import { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import UnstyledButton from '../button/UnstyledButton';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/authSlice';

const Nav = () => {
	const [isSearch, setIsSearch] = useState(false);
	const [isNavMobile, setIsNavMobile] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const user = useSelector(state => state.login.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const searchHandler = e => {
		e.preventDefault();

		navigate(`/search/${searchValue}`);
		setSearchValue('');
		setIsSearch(false);
	};

	return (
		<nav className="fixed top-0 z-50 w-full bg-white py-3">
			<div className="layout flex items-center justify-between">
				<NavLink end to="/">
					<img src={logo} alt="Logo" width={40} />
				</NavLink>

				<ul
					className={`absolute -bottom-36 right-4 ${
						isNavMobile ? 'flex' : 'hidden'
					} flex-col items-center space-y-4 rounded-md bg-white py-3 px-5 shadow md:static md:flex md:flex-row md:space-y-0 md:space-x-8 md:rounded-none md:p-0 md:shadow-none`}
				>
					<li className="font-semibold transition duration-300 hover:text-blue-800">
						<NavLink end to="/" className={navData => (navData.isActive ? 'underline decoration-red-600 underline-offset-8' : '')}>
							Indonesia
						</NavLink>
					</li>
					<li className="font-semibold transition duration-300 hover:text-blue-800">
						<NavLink end to="/programming" className={navData => (navData.isActive ? 'underline decoration-red-600 underline-offset-8' : '')}>
							Programming
						</NavLink>
					</li>
					<li className="font-semibold transition duration-300 hover:text-blue-800">
						<NavLink end to="/covid" className={navData => (navData.isActive ? 'underline decoration-red-600 underline-offset-8' : '')}>
							COVID-19
						</NavLink>
					</li>
				</ul>

				<div className="flex items-center space-x-4">
					<UnstyledButton title="Search" onClick={() => setIsSearch(prev => !prev)}>
						<FiSearch size={24} className={isSearch && 'text-red-600'} />
						<span className="sr-only">Search button</span>
					</UnstyledButton>
					<NavLink
						title="Go to saved page"
						end
						to="/saved"
						className={navData => (navData.isActive ? 'underline decoration-red-600 underline-offset-8' : '')}
					>
						<BsBookmark size={20} />
						<span className="sr-only">Saved page button</span>
					</NavLink>
					{user ? (
						<>
							<div>Hi, {user.user}</div>
							<UnstyledButton
								onClick={() => dispatch(logout())}
								className="transiton rounded-full bg-red-700 py-2 px-4 font-poppins text-sm font-medium text-white duration-300 hover:bg-red-800"
							>
								Logout
							</UnstyledButton>
						</>
					) : (
						<NavLink
							title="Go to login page"
							end
							to="/login"
							className={navData => (navData.isActive ? 'underline decoration-red-600 underline-offset-8' : '')}
						>
							<div className="transiton rounded-full bg-red-700 py-2 px-4 font-poppins text-sm font-medium text-white duration-300 hover:bg-red-800">
								Login
							</div>
						</NavLink>
					)}

					<UnstyledButton
						className="md:hidden"
						onClick={() => {
							setIsNavMobile(prev => !prev);
							setIsSearch(false);
						}}
					>
						<CgMenuRight size={24} className={isNavMobile && 'text-red-600'} />
					</UnstyledButton>
				</div>
			</div>

			<form onSubmit={searchHandler}>
				<div
					className={`absolute -bottom-12 z-10 flex max-w-md items-center rounded-md bg-white py-1 shadow-sm ring-1 ring-red-600 ring-offset-2 ${
						isSearch ? 'right-4' : '-right-64'
					} transition-all duration-200`}
				>
					<input
						type="text"
						placeholder="Input keyword"
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						className="h-6 w-full px-3 focus:outline-none"
						required
					/>
					<UnstyledButton className="pr-2" type="submit">
						<FiSearch size={20} />
					</UnstyledButton>
				</div>
			</form>
		</nav>
	);
};

export default Nav;
