import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useContext, useState, useRef } from 'react';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const { user, dispatch } = useContext(UserContext);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const [promt, setPromt] = useState("");
    const navigate = useNavigate()
    const searchInputRef = useRef(null);

    const toggleSearch = () => {
        setSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setTimeout(() => {
                searchInputRef.current.focus();
            }, 0);
        }
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const isActive = (pathname) => {
        return location.pathname === pathname;
    }
    const handleClick = async () => {
        try {
            dispatch({type: "LOGOUT"});
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <nav className="top-0 sticky w-full bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog Market</span>
                </Link>
                <div className="flex md:order-2">
                    {location.pathname === "/" && <button
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                        onClick={toggleSearch}
                    >
                        <IoSearchOutline className='text-2xl font-bold text-slate-300' />
                        <span className="sr-only">Search</span>
                    </button>}
                    <button
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        onClick={toggleMenu}
                    >
                        <FaBars className='text-lg sm:text-xl' />
                    </button>
                </div>
                {location.pathname === "/" && <div className={`relative item-center justify-center w-full md:w-[24%] lg:w-[24%] md:flex md:mx-auto md:order-1 mt-2 ${isSearchOpen ? 'block' : 'hidden'}`}>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
                        <IoSearchOutline className='text-lg font-bold text-slate-300' />
                    </div>
                    <input
                        ref={searchInputRef}
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border focus:outline-none  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        onChange={(e) => {
                            setPromt(() => {
                                const newPromt = e.target.value;
                                navigate(newPromt ? `?search=${newPromt}` : "/");
                                return newPromt;
                            });
                        }}
                    />
                </div>}
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-2 ${showMenu ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 mr-6 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className={`block py-2 px-3 rounded md:p-0 ${isActive('/') ? 'text-blue-500 hover:bg-blue-400 md:hover:bg-gray-900 hover:text-white' : 'text-white hover:bg-blue-400 md:hover:text-blue-400 md:hover:bg-transparent md:p-0'}`}>Home</Link>
                        </li>
                        <li>
                            {
                                user ? <Link to="/write" className={`block py-2 px-3 rounded md:p-0 ${isActive('/write') ? 'text-blue-500 hover:bg-blue-400 md:hover:bg-gray-900 hover:text-white' : 'text-white hover:bg-blue-400 md:hover:text-blue-400 md:hover:bg-transparent md:p-0'}`}>Write</Link>
                                    : <Link to="/login" className={`block py-2 px-3 rounded md:p-0 ${isActive('/login') ? 'text-blue-500 hover:bg-blue-400 md:hover:bg-gray-900 hover:text-white' : 'text-white hover:bg-blue-400 md:hover:text-blue-400 md:hover:bg-transparent md:p-0'}`}>Login</Link>
                            }
                        </li>
                        {
                            user && <li>
                                <Link to="/about" className={`block py-2 px-3 rounded md:p-0 ${isActive('/about') ? 'text-blue-500 hover:bg-blue-400 md:hover:bg-gray-900 hover:text-white' : 'text-white hover:bg-blue-400 md:hover:text-blue-400 md:hover:bg-transparent md:p-0'}`}>About</Link>
                            </li>
                        }
                        {
                            user && <li>
                                <Link to={"/myblogs/"+user._id} className={`block py-2 px-3 rounded md:p-0 ${isActive('/myblogs') ? 'text-blue-500 hover:bg-blue-400 md:hover:bg-gray-900 hover:text-white' : 'text-white hover:bg-blue-400 md:hover:text-blue-400 md:hover:bg-transparent md:p-0'}`}>My Blogs</Link>
                            </li>
                        }
                        <li>
                            {
                                user ? <Link to={`/profile/${user._id}`} className={`block py-2 px-3 rounded md:p-0 ${isActive('/profile') ? 'text-blue-500 hover:bg-blue-400 md:hover:bg-gray-900 hover:text-white' : 'text-white hover:bg-blue-400 md:hover:text-blue-400 md:hover:bg-transparent md:p-0'}`}>Profile</Link>
                                    : <Link to="/register" className={`block py-2 px-3 rounded md:p-0 ${isActive('/register') ? 'text-blue-5 00 hover:bg-blue-400 md:hover:bg-gray-900 hover:text-white' : 'text-white hover:bg-blue-400 md:hover:text-blue-400 md:hover:bg-transparent md:p-0'}`}>Register</Link>
                            }
                        </li>
                        {
                            user && <li>
                                <Link to="/" onClick={handleClick} className={`block py-2 px-3 rounded md:p-0 ${isActive('/logout') ? 'text-blue-500 hover:bg-blue-400 md:hover:bg-gray-900 hover:text-white' : 'text-white hover:bg-blue-400 md:hover:text-blue-400 md:hover:bg-transparent md:p-0'}`}>Logout</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
