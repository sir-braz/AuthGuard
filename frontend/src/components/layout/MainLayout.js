import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MainLayout = ({ children }) => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <h1 className="text-xl font-bold">PãoFácil</h1>
                        </div>
                        {user && (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">Olá, {user.name}</span>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                                >
                                    Sair
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto py-6 px-4">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
