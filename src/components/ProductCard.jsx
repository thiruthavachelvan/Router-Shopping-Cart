import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { cart, addToCart, removeFromCart } = useCart();
    const isInCart = cart.some((item) => item.id === product.id);

    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
            <div className="relative pt-[100%] overflow-hidden bg-gray-50 p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 p-4"
                />
                {/* Helper overlay for aesthetics */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-1" title={product.title}>
                    {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 capitalize">{product.category}</p>

                <div className="flex-grow">
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {product.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-xl font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform active:scale-95 ${isInCart
                                ? 'bg-red-50 text-red-600 hover:bg-red-100/80 border border-red-200'
                                : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20'
                            }`}
                    >
                        {isInCart ? 'Remove' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
