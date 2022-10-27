import PrimaryButton from './button/PrimaryButton';
import UnstyledButton from './button/UnstyledButton';
import dateFormat from '../utils/dateFormat';
import { useDispatch, useSelector } from 'react-redux';
import { savedArticle } from '../features/savedSlice';

const ArticleCard = ({ article }) => {
	const dispatch = useDispatch();
	const savedNews = useSelector(state => state.saved.articles);

	return (
		<div className="overflow-hidden rounded-md bg-white shadow">
			<img src={article.urlToImage} loading="lazy" alt={article.title} className="h-40 w-full object-cover object-center" />
			<div className="flex flex-col justify-between">
				<div className="border-b py-3 px-5">
					<div>
						<span className="font-poppins text-xs">{dateFormat(article.publishedAt)}</span>
						<h5 className="font-secondary text-lg leading-normal">{article.title}</h5>
						<p className="mt-5 text-[15px]">{article.description}</p>
					</div>
					<div className="mt-8">
						<p className="font-poppins text-sm text-slate-500">
							By {article.author} | {article.source.name}
						</p>
					</div>
				</div>

				<div className="flex h-full items-center space-x-5  py-3 px-5">
					<PrimaryButton
						href={article.url}
						target="_blank"
						className="transiton rounded-sm bg-red-700 py-2 px-4 font-poppins text-sm font-medium text-white duration-300 hover:bg-red-800"
					>
						Read More
					</PrimaryButton>
					<UnstyledButton
						onClick={() => dispatch(savedArticle(article))}
						className="rounded-sm border border-red-300 py-2 px-4 font-poppins text-sm font-medium text-red-700 transition duration-300 hover:bg-slate-100"
					>
						{savedNews.find(news => news.title === article.title) ? 'Unsave' : 'Save'}
					</UnstyledButton>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
