import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, totalAmount, discountAmount, finalPrice, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
                <div className="bg-gray-100 p-6 rounded-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 max-w-sm text-center">It looks like you haven't added anything to your cart yet. Browse our products to find something you'll love.</p>
                <Link
                    to="/"
                    className="bg-gray-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart ({cart.length} items)</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items List */}
                <div className="lg:w-2/3 flex flex-col gap-4">
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    {/* Clear Cart Button (Optional but useful) */}
                    <div className='flex justify-end mt-4'>
                        <button
                            onClick={clearCart}
                            className="text-sm text-red-500 hover:text-red-700 underline"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <span>Discount (10%)</span>
                                <span>-${discountAmount.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                                <span className="text-lg font-bold text-gray-900">Total</span>
                                <span className="text-2xl font-bold text-gray-900">${finalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 transform active:scale-[0.98]">
                            Checkout
                        </button>
                        <p className="text-xs text-center text-gray-400 mt-4">
                            Secure Checkout - SSL Encrypted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
