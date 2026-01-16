import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, totalAmount, discountAmount, finalPrice, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 animate-fade-in-up bg-gray-50">
                <div className="bg-blue-100 p-8 rounded-full mb-6 animate-pulse-subtle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0EA5E9]">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-3">Your cart is empty</h2>
                <p className="text-gray-600 mb-10 max-w-md text-center text-lg">It looks like you haven't added anything to your cart yet. Browse our products to find something you'll love.</p>
                <Link
                    to="/"
                    className="group relative px-10 py-4 rounded-lg font-bold text-gray-900 bg-[#FDE047] hover:bg-[#FCD34D] shadow-xl shadow-yellow-200 hover:shadow-yellow-300 transition-all-smooth transform hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Start Shopping
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10 bg-gray-50 min-h-screen">
            <div className="mb-10 animate-fade-in-up">
                <h1 className="text-4xl font-black text-gray-900 mb-2">
                    <span className="border-l-4 border-[#FDE047] pl-3">Shopping</span> <span className="text-[#0EA5E9]">Cart</span>
                </h1>
                <p className="text-gray-600 text-lg pl-4">{cart.length} {cart.length === 1 ? 'item' : 'items'} ready for checkout</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items List */}
                <div className="lg:w-2/3 flex flex-col gap-4">
                    {cart.map((item, index) => (
                        <div key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
                            <CartItem item={item} />
                        </div>
                    ))}
                    {/* Clear Cart Button */}
                    <div className='flex justify-end mt-4'>
                        <button
                            onClick={clearCart}
                            className="group px-5 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 font-semibold text-sm transition-all-smooth transform hover:scale-105 active:scale-95 border-2 border-red-200 hover:border-red-300"
                        >
                            🗑️ Clear All Items
                        </button>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sticky top-24 animate-scale-in">
                        <h2 className="text-2xl font-black text-gray-900 mb-8">
                            Order Summary
                        </h2>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-700 text-base">
                                <span className="font-medium">Subtotal</span>
                                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-[#10B981] text-base font-semibold bg-green-50 px-4 py-3 rounded-lg">
                                <span>Discount (10%)</span>
                                <span>-${discountAmount.toFixed(2)}</span>
                            </div>
                            <div className="border-t-2 border-gray-200 pt-4 flex justify-between items-center">
                                <span className="text-xl font-bold text-gray-900">Total</span>
                                <span className="text-3xl font-black text-gray-900">
                                    ${finalPrice.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <button className="w-full bg-[#FDE047] hover:bg-[#FCD34D] text-gray-900 font-black py-4 rounded-xl shadow-xl shadow-yellow-200 hover:shadow-yellow-300 transition-all-smooth transform hover:scale-105 active:scale-95 text-base">
                            <span className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                    <line x1="1" y1="10" x2="23" y2="10"></line>
                                </svg>
                                Proceed to Checkout
                            </span>
                        </button>
                        <p className="text-xs text-center text-gray-500 mt-5 flex items-center justify-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            Secure Checkout - SSL Encrypted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
