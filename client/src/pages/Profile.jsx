import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";
import { useState } from "react"

const Profile = () => {
    const [updated, setUpdated] = useState(false);
    return (
        <div>
            <Navbar />
            <div className="px-6 md:px-[100px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
                {/* left */}
                <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-8">
                    <h1 className="text-xl font-bold mb-4">Your Posts:</h1>
                    <ProfilePosts />
                    <ProfilePosts />
                    <ProfilePosts />
                    <ProfilePosts />
                    <ProfilePosts />
                </div>
                {/* Right */}
                <div className="md:sticky md:top-12  flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end ">
                    <div className=" flex flex-col justify-center items-center space-y-4 border-2 border-black p-2 rounded-lg">
                        <h1 className="text-xl font-bold mb-4 ">Profile</h1>
                        <input className="outline-none px-4 py-2 bg-slate-200 text-black rounded-xl" placeholder="Your username" type="text" />
                        <input className="outline-none px-4 py-2 bg-slate-200 text-black rounded-xl" placeholder="Your email" type="email" />
                        <div className="flex items-center space-x-4 mt-8">
                            <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400 rounded-full ">Update</button>
                            <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400 rounded-full">Delete</button>
                        </div>
                        {updated && <h3 className="text-green-500 text-sm text-center mt-4">user updated successfully!</h3>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
