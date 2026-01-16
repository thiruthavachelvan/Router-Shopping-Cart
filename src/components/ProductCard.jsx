import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { cart, addToCart, removeFromCart } = useCart();
    const isInCart = cart.some((item) => item.id === product.id);

    const handleButtonClick = (e) => {
        e.currentTarget.classList.add('animate-scale-in');
        setTimeout(() => {
            e.currentTarget.classList.remove('animate-scale-in');
        }, 400);

        if (isInCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    return (
        <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all-smooth overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1 animate-fade-in-up">
            <div className="relative pt-[75%] overflow-hidden bg-gray-50 p-3">
                <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 p-3"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <div className="mb-2 px-2 py-1 bg-blue-50 text-[#0EA5E9] text-xs font-semibold rounded uppercase w-fit">
                    {product.category}
                </div>

                <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-[#0EA5E9] transition-colors" title={product.title}>
                    {product.title}
                </h3>

                <p className="text-gray-600 text-xs line-clamp-2 mb-3 flex-grow">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3">
                    <span className="text-lg font-black text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={handleButtonClick}
                        className={`px-4 py-2 rounded-lg font-bold text-xs transition-all-smooth transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${isInCart
                            ? 'bg-[#10B981] text-white'
                            : 'bg-[#FDE047] text-gray-900 hover:bg-[#FCD34D]'
                            }`}
                    >
                        {isInCart ? '✓ Added' : '+ Add'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
