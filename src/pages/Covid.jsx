import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import previousMonthDate from '../utils/previousMonthDate';
import { API_URL, API_KEY } from '../utils/config';
import Loading from '../components/lazy/Loading';

const CovidPage = () => {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const res = await axios.get(`${API_URL}/everything?q=Covid-19&from=${previousMonthDate()}&sortBy=popularity&apiKey=${API_KEY}`);

			setNews(res.data.articles);
			setLoading(false);
		})();
	}, []);

	return (
		<Layout title="Covid">
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

export default CovidPage;
