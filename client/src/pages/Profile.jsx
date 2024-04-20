import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"
import axios from "axios"
import { IF, URL, token } from "../url"
import { UserContext } from "../context/UserContext"
import { useNavigate, useParams } from "react-router-dom"

const Profile = () => {
    const { user, dispatch } = useContext(UserContext);
    const [username, setUsername] = useState(user?.username || '');
    const [email, setEmail] = useState(user?.email || '');
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [updated, setUpdated] = useState(false);
    const config = {headers: {'Authorization': `Bearer ${token}`}};
    useEffect(() => {
        const fetchData = async () => {
            if (user && user._id) {
                try {
                    const userRes = await axios.get(URL + "/api/users/" + user._id);
                    setUsername(userRes.data.username);
                    setEmail(userRes.data.email);
                    const postsRes = await axios.get(URL + "/api/posts/user/" + user._id);
                    setPosts(postsRes.data);
                } catch (err) {
                    console.log(err);
                }
            }
        };

        fetchData();
    }, [user]);
    
    const handleUpdateUser = async () => {
        const isConfirmed = window.confirm("Are you sure you want to update your profile?");
        if (isConfirmed) {
            setUpdated(false);
            try {
                const res = await axios.put(URL + "/api/users/" + user._id, { username, email }, config);
                const updatedUser = res.data;
                dispatch({type: "UPDATE_USER", payload: updatedUser })
                setUpdated(true);
            } catch (err) {
                console.log(err);
            }
            setUpdated(false);
        }
    }

    const handleDeleteUser = async () => {
        const isConfirmed = window.confirm("Are you sure you want to delete your account?");
        if (isConfirmed) {
            try {
                const res = await axios.delete(URL + "/api/users/" + user._id, config);
                dispatch({ type: "LOGOUT" });
                navigate("/");
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow px-6 md:px-[100px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
                {/* left */}
                <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-8">
                    <h1 className="text-xl font-bold mb-4">Your Posts:</h1>
                    {
                        posts?.map((post) => (
                            <ProfilePosts key={post._id} post={post} />
                        ))
                    }
                </div>
                {/* Right */}
                <div className="md:sticky md:top-12  flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end ">
                    <div className=" flex flex-col justify-center items-center space-y-4 border-2 border-black p-2 rounded-lg">
                        <h1 className="text-xl font-bold mb-4 ">Profile</h1>
                        <input onChange={(e) => setUsername(e.target.value)} value={username} className="outline-none px-4 py-2 bg-slate-200 text-black rounded-xl" placeholder="Your username" type="text" />
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className="outline-none px-4 py-2 bg-slate-200 text-black rounded-xl" placeholder="Your email" type="email" />
                        <div className="flex items-center space-x-4 mt-8">
                            <button onClick={handleUpdateUser} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400 rounded-full ">Update</button>
                            <button onClick={handleDeleteUser} className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400 rounded-full">Delete</button>
                        </div>
                        {updated && <h3 className="text-green-500 text-sm text-center mt-4">User updated successfully!</h3>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
