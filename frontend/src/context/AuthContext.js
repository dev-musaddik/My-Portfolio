import React, { createContext, useReducer, useEffect } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { axiosInstance } from '../api/axiosInstance';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case 'USER_UPDATED':
            return {
                ...state,
                user: action.payload
            };
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token, // Only store token here
                isAuthenticated: true,
                loading: true // Set loading to true while user details are being fetched
            };
        case 'AUTH_ERROR':
        case 'REGISTER_FAIL':
        case 'LOGIN_FAIL':
        case 'LOGOUT':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        } else {
            // If no token, ensure isAuthenticated is false and user is null
            dispatch({ type: 'AUTH_ERROR' });
            return;
        }

        try {
            const res = await axiosInstance.get('/auth');
            dispatch({ type: 'USER_LOADED', payload: res.data });
        } catch (err) {
            dispatch({ type: 'AUTH_ERROR' });
        }
    };

    useEffect(() => {
        // Call loadUser on initial mount
        loadUser();

        // Also call loadUser when a token appears in localStorage after login/register
        // but only if the user is not already loaded and not currently loading
        if (localStorage.token && !state.isAuthenticated && !state.loading) {
            loadUser();
        }
    }, [state.token, state.isAuthenticated, state.loading]); // Add dependencies

    return (
        <AuthContext.Provider value={{ state, dispatch, loadUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };