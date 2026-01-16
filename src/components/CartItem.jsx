import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    return (
        <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            {/* Product Image */}
            <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg p-2">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain mix-blend-multiply"
                />
            </div>

            {/* Product Details */}
            <div className="flex-grow text-center sm:text-left">
                <h3 className="text-gray-900 font-semibold line-clamp-1">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1 capitalize">{item.category}</p>
                <p className="text-purple-600 font-bold mt-2">${item.price.toFixed(2)}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-600 shadow-sm hover:text-purple-600 hover:shadow transition-all disabled:opacity-50"
                    aria-label="Decrease quantity"
                >
                    -
                </button>
                <span className="w-8 text-center font-medium text-gray-900">{item.quantity}</span>
                <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-600 shadow-sm hover:text-purple-600 hover:shadow transition-all"
                    aria-label="Increase quantity"
                >
                    +
                </button>
            </div>

            {/* Total Price & Remove */}
            <div className="flex flex-col sm:items-end items-center gap-2 min-w-[100px]">
                <span className="text-lg font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded-md transition-colors"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
