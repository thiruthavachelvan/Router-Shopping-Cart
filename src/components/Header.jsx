import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Header = () => {
    const { cart } = useCart();
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    ShopStore
                </Link>

                <nav>
                    <Link to="/cart" className="relative group p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                        <span className="sr-only">Cart</span>
                        {/* Shopping Cart Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 group-hover:text-purple-600 transition-colors">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>

                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-subtle">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
