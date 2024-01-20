import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const user = true;
    return (
        <div className="flex items-center justify-between px-4 md:px-[15%] py-4 bg-slate-300">
            <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
            <div className='flex justify-center items-center space-x-0 mx-2 md:ml-10 bg-white px-3 rounded-xl'>
                <input type="text" placeholder='Search a post' className='outline-none w-[90%]' />
                <IoSearchOutline/>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center space-x-2 md:space-x-6'>
                { user ? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
                {user ? <h3>Profile</h3> : <h3><Link to="/register">Register</Link></h3>}
            </div>

        </div>
    )
}

export default Navbar
