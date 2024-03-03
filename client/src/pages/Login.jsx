import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { URL } from "../url.js"
import { UserContext } from "../context/UserContext.jsx";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const { dispatch } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(URL + "/api/auth/login", { email, password });
            const { token } = res.data;
            const user = res.data.data;
            dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } })
            navigate("/");
        } catch (err) {
            setError(true);
        }
    }
    return (
        <>
            <div className="top-0 sticky w-full bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog Market</span>
                    </Link>
                    <h3 className="flex items-center p-4 mr-6 font-medium md:mt-0 text-black dark:text-white md:bg-white md:dark:bg-gray-900">
                        <Link to="/register" className="no-underline">Register</Link>
                    </h3>
                </div>
            </div>

            <div className="w-full flex justify-center items-center h-[80vh] ">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-left">Log in to your account</h1>
                    <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border-2 rounded-lg border-black outline-0" type="text" placeholder="Enter your email" />
                    <div className="w-full flex px-4 py-2 border-2 rounded-lg border-black" >
                        <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-[95%] outline-0" />
                        <div className="flex my-auto text-lg pl-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <IoEyeOutline />}
                        </div>
                    </div>
                    <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-xl hover:bg-gray-500 hover:text-black ">Log in</button>
                    {error && <h3 className="text-red-500 text-sm ">Invalid email or password</h3>}
                    <div className="flex justify-center items-center space-x-3">
                        <p>New here?</p>
                        <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Login