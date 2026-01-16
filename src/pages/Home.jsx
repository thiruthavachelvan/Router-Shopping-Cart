import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
                <div className="relative">
                    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#0EA5E9]"></div>
                    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#FDE047] absolute top-0 left-0" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                </div>
                <p className="mt-6 text-gray-600 font-medium animate-pulse">Loading amazing products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center">
                <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-200">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <p className="text-red-600 font-semibold text-lg">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
            <div className="mb-10 animate-fade-in-up">
                <h2 className="text-3xl font-black text-gray-900 mb-1">
                    <span className="border-l-4 border-[#FDE047] pl-3">Featured</span> <span className="text-[#0EA5E9]">Products</span>
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
