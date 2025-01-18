import PropTypes from 'prop-types';
import { FaRegEye } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const NewsCard = ( props = {} ) => {
  const {news} = props || {};
  return (
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
      <figure>
        <img src={news.thumbnail_url} alt={news.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={news.author.img}
              alt={news.author.name}
              className="w-10 h-10 rounded-full border border-gray-200"
            />
            <div>
              <h2 className="text-sm font-semibold">{news.author.name}</h2>
              <p className="text-xs text-gray-500">
                {new Date(news.author.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-sm rounded-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 12h.01M12 12h.01M18 12h.01M9 16h6M9 8h6"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Share</a>
              </li>
              <li>
                <a>Save</a>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="card-title text-lg font-bold mt-4">{news.title}</h2>
        <p className="text-sm text-gray-700 line-clamp-3">{news.details}</p>
        <div className="card-actions mt-4 flex justify-between items-center">
          <div className="flex items-center gap-1 text-yellow-500">
            <AiFillStar />
            <span className="text-sm font-semibold">{news.rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaRegEye />
            <span className="text-sm">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    author: PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.shape({
      number: PropTypes.number.isRequired,
    }).isRequired,
    total_view: PropTypes.number.isRequired,
  }).isRequired,
};

export default NewsCard;

// Usage Example
// import NewsCard from './NewsCard';
// const news = { /* Your JSON news */ };
// <NewsCard news={news} />;
