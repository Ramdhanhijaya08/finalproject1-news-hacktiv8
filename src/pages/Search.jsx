import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import { useParams } from 'react-router-dom';
import { API_URL, API_KEY } from '../utils/config';

const SearchPage = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const { keyword } = useParams();

	useEffect(() => {
		(async () => {
			setLoading(true);
			const res = await axios.get(`${API_URL}/everything?q=${keyword}&apiKey=${API_KEY}`);

			setNews(res.data);
			setLoading(false);
		})();
	}, [keyword]);

	return (
		<Layout title="Search">
			<section>
				<h2 className="mb-10">Searching for : {keyword}</h2>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
					{!loading ? (
						news?.totalResults > 0 ? (
							news.articles.map(n => <ArticleCard key={n.title} article={n} />)
						) : (
							<h3>Sorry, no result found</h3>
						)
					) : (
						<h3>Loading...</h3>
					)}
				</div>
			</section>
		</Layout>
	);
};

export default SearchPage;
