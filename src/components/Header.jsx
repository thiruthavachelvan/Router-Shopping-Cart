import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Header = () => {
    const { cart } = useCart();
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <header className="sticky top-0 z-50 bg-[#0EA5E9] shadow-md">
            <div className="container mx-auto px-4 py-2.5 flex justify-between items-center">
                <Link to="/" className="group">
                    <h1 className="text-xl font-black text-white hover:scale-105 transition-transform duration-300">
                        Shop<span className="text-[#FDE047]">Today</span>
                    </h1>
                </Link>

                <nav>
                    <Link to="/cart" className="relative group">
                        <div className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-colors duration-300">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>

                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#FDE047] text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-pulse-subtle">
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
