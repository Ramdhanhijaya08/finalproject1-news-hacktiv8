import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/authSlice';
import { useEffect } from 'react';

const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
	const user = useSelector(state => state.login.user);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(
			login({
				email: email,
				password: password,
				loggedIn: true,
				user: 'Dwi',
			})
		);
		navigate('/');
	};

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user]);

	return (
		<div className="my-10 flex justify-center">
			<div className="w-1/3 rounded-lg border-gray-600 p-3 shadow">
				<h1 className="text-2x1 transiton my-7 justify-center rounded-lg bg-red-500 py-3 px-4 font-extrabold text-white ">Login </h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label>Email</label>
						<div>
							<input
								type="email"
								placeholder="Email"
								className="w-full rounded-lg border border-gray-600 p-1"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<label>Password</label>
						<div>
							<input
								type="password"
								placeholder="Password"
								className="w-full rounded-lg border border-gray-600 p-1"
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="my-3 ">
						<button type="submit" className="rounded-lg bg-green-700 px-3 py-1 text-white">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
