import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleLogin = () => {

    }
    return (
        <>
            <div className="flex items-center justify-between px-6 md:px-[200px] bg-slate-300 py-4">
                <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
                <h3 className="hover:scale-105 hover:font-semibold"><Link to="/register">Register</Link></h3>
            </div>
            <div className="w-full flex justify-center items-center h-[80vh] ">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-left">Log in to your account</h1>
                    <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border-2 rounded-lg border-black outline-0" type="text" placeholder="Enter your email" />
                    <div className="w-full flex px-4 py-2 border-2 rounded-lg border-black" >
                        <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-[95%] outline-0" />
                        <div className="flex my-auto text-lg pl-2" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEyeInvisible /> : <IoEyeOutline />}
                        </div>
                    </div>
                    <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-xl hover:bg-gray-500 hover:text-black ">Log in</button>
                    {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
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