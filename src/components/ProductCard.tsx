import { Product } from '../lib/slices/CreateProductSlice';
import { useAppStore } from '../lib/store';

const ProductCard = (props: Product) => {
  const { title, description, images, category, price } = props;

  const { addToCart, toggleCart } = useAppStore();
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={images[0]} alt={title} />
      </a>
      <div className="p-5 flex justify-between">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {category.name}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rs. {price}.00
        </p>
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description.substring(0, 50)}...
        </p>
        <button
          onClick={() => {
            addToCart(props);
            toggleCart();
          }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add To Cart<span className='px-1'></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
