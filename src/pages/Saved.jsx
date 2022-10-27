import Layout from '../components/layout';
import ArticleCard from '../components/ArticleCard';
import { useSelector } from 'react-redux';

const SavedPage = () => {
	const savedNews = useSelector(state => state.saved.articles);

	return (
		<Layout title="Saved">
			<h2 className="mb-10">Saved Articles</h2>
			{savedNews.length ? (
				<section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
					{savedNews?.map(n => (
						<ArticleCard key={n.title} article={n} />
					))}
				</section>
			) : (
				<h3>The article you saved does not exist.</h3>
			)}
		</Layout>
	);
};

export default SavedPage;
