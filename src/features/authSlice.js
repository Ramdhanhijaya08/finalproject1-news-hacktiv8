import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'login',
	initialState: {
		user: null,
	},
	reducers: {
		//ini aksi untuk di link kan ke nav bar (logic harus di isi)
		login: (state, action) => {
			state.user = action.payload;
		},
		setLogin: (state, action) => {
			state.user = action.payload.name;
		},
		logout: state => {
			state.user = null;
		},
	},
});

export const { login, setLogin, logout } = authSlice.actions;

export const selectUser = state => state.user.user;

export default authSlice.reducer;
