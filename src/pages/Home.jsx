import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import { API_URL, API_KEY } from '../utils/config';
import Loading from '../components/lazy/Loading';

const HomePage = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const res = await axios.get(`${API_URL}/top-headlines?country=id&apiKey=${API_KEY}`);

			setNews(res.data.articles);
			setLoading(false);
		})();
	}, []);

	return (
		<Layout title="Home">
			{!loading ? (
				<section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
					{news?.map(n => (
						<ArticleCard article={n} key={n.title} />
					))}
				</section>
			) : (
				<Loading />
			)}
		</Layout>
	);
};

export default HomePage;
