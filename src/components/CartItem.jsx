import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    const handleButtonClick = (e, action) => {
        e.currentTarget.classList.add('animate-scale-in');
        setTimeout(() => {
            e.currentTarget.classList.remove('animate-scale-in');
        }, 400);
        action();
    };

    return (
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all-smooth animate-slide-in-right">
            {/* Product Image */}
            <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg p-3 transform hover:scale-105 transition-transform">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply"
                />
            </div>

            {/* Product Details */}
            <div className="flex-grow text-center sm:text-left">
                <h3 className="text-gray-900 font-bold text-base line-clamp-1 hover:text-[#0EA5E9] transition-colors">{item.title}</h3>
                <p className="text-[#0EA5E9] text-sm mt-1 capitalize font-medium">{item.category}</p>
                <p className="text-gray-900 font-bold text-lg mt-2">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2">
                <button
                    onClick={(e) => handleButtonClick(e, () => decreaseQuantity(item.id))}
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-white text-gray-700 font-bold text-lg shadow-sm hover:shadow-md hover:bg-[#0EA5E9] hover:text-white transition-all-smooth transform hover:scale-110 active:scale-95"
                    aria-label="Decrease quantity"
                >
                    -
                </button>
                <span className="w-10 text-center font-black text-lg text-gray-900">{item.quantity}</span>
                <button
                    onClick={(e) => handleButtonClick(e, () => increaseQuantity(item.id))}
                    className="w-9 h-9 flex items-center justify-center rounded-md bg-white text-gray-700 font-bold text-lg shadow-sm hover:shadow-md hover:bg-[#0EA5E9] hover:text-white transition-all-smooth transform hover:scale-110 active:scale-95"
                    aria-label="Increase quantity"
                >
                    +
                </button>
            </div>

            {/* Total Price & Remove */}
            <div className="flex flex-col sm:items-end items-center gap-3 min-w-[120px]">
                <span className="text-2xl font-black text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                    onClick={(e) => handleButtonClick(e, () => removeFromCart(item.id))}
                    className="group px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all-smooth transform hover:scale-105 active:scale-95"
                >
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        Remove
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CartItem;
