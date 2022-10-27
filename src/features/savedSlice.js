import { createSlice } from '@reduxjs/toolkit';

const localArticles = JSON.parse(localStorage.getItem('articles')) ?? [];

const initialState = {
	articles: localArticles,
};

export const savedSlice = createSlice({
	name: 'saved',
	initialState,
	reducers: {
		savedArticle: (state, action) => {
			const findArticle = state.articles.find(article => article.title === action.payload.title);
			if (findArticle) {
				const newArticles = state.articles.filter(article => article.title !== action.payload.title);
				state.articles = newArticles;
				localStorage.setItem('articles', JSON.stringify(newArticles));
			} else {
				const newArticles = [action.payload, ...state.articles];
				state.articles = newArticles;
				localStorage.setItem('articles', JSON.stringify(newArticles));
			}
		},
	},
});

export const { savedArticle } = savedSlice.actions;

export default savedSlice.reducer;
