import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { axiosInstance } from '../api/axiosInstance';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const { loadUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify({ email, password });
            const res = await axiosInstance.post('/auth/login', body, config);
            localStorage.setItem('token', res.data.token);
            await loadUser();
            navigate('/dashboard');
        } catch (err) {
            console.error(err.response.data);
            setError(err.response.data.msg || err.response.data.errors[0].msg);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-8 rounded-lg shadow-lg w-full max-w-md bg-white dark:bg-black">
                <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">Sign In</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={e => onSubmit(e)} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                            required
                            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                            minLength="6"
                            required
                            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 rounded-md bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-black transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
                    Don't have an account? <Link to="/register" className="text-black dark:text-white hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;