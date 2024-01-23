import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from 'axios';
import { URL } from '../url.js';

const Register = () => {
    const [formInput, setFormInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [formError, setFormError] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const validateFormInput = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{7,}$/;
        
        let inputError = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
        if (!formInput.username) {
            inputError.username = "Enter a valid username";
        }
        if (!formInput.email) {
            inputError.email = "Enter a valid email address";
        } else if (!emailRegex.test(formInput.email)) {
            inputError.email = "Invalid email format";
        }
        if (!formInput.password) {
            inputError.password = "Password should not be empty";
        } else if (!passRegex.test(formInput.password)) {
            inputError.password = "Password should contain at least 7 characters, including one uppercase letter, one lowercase letter, one digit, and one special character";
        }else if (formInput.password !== formInput.confirmPassword) {
            inputError.confirmPassword = "Password and confirm password should be the same";
        }
        setFormError(inputError);
        return Object.values(inputError).every((error) => error === "");
    };
    

    const handleRegister = async () => {
        try {
            const res = await axios.post(URL + "/api/auth/register", formInput);
            setFormError({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setError(false);
            navigate("/login");
        } catch (err) {
            setError(true);
            console.log(err);
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
                        <Link to="/login" className="no-underline">Login</Link>
                    </h3>
                </div>
            </div>
            <div className="w-full flex justify-center items-center h-[80vh] ">
                <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-left">Create an account</h1>
                    <input onChange={(e) => setFormInput({ ...formInput, username: e.target.value })} className="w-full px-4 py-2 border-2 rounded-lg border-black outline-0" type="text" name="username" placeholder="Enter your username" />
                    {formError.username && <p className="text-red-500 text-sm font-medium mt-6">{formError.username}</p>}
                    <input onChange={(e) => setFormInput({ ...formInput, email: e.target.value })} className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0" type="text" name="email" placeholder="Enter your email" />
                    {formError.email && <p className="text-red-500 text-sm font-medium mt-6">{formError.email}</p>}
                    <input onChange={(e) => setFormInput({ ...formInput, password: e.target.value })} className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0" type="password" name="password" placeholder="Enter your password" />
                    {formError.password && <p className="text-red-500 text-sm font-medium mt-6">{formError.password}</p>}
                    <input onChange={(e) => setFormInput({ ...formInput, confirmPassword: e.target.value })} className="w-full px-4 py-2 border-2 border-black rounded-lg outline-0" type="password" name="confirmpassword" placeholder="Confirm your password" />
                    {formError.confirmPassword && <p className="text-red-500 text-sm font-medium mt-6">{formError.confirmPassword}</p>}
                    <button onClick={() => {if (validateFormInput()) {handleRegister();}}} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-xl hover:bg-gray-500 hover:text-black ">Register</button>
                    {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
                    <div className="flex justify-center items-center space-x-3">
                        <p>Already have an account?</p>
                        <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Register