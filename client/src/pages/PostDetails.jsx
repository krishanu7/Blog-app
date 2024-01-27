import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { URL, IF } from "../url";
import Loader from "../components/Loader";
import axios from 'axios';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Comment from "../components/Comments"
import { UserContext } from "../context/UserContext";

const PostDetails = () => {
    const postId = useParams().id;
    const [post, setPost] = useState({});
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(URL + `/api/posts/${postId}`);
            setPost(res.data);
            setLoading(false);
        } catch (err) {
            setLoading(true);
            console.log(err);
        }
    }
    const handlePostDeletion = async () => {
        try {
            const res = await axios.delete(URL + "/api/posts/" + postId, { withCredentials: true });
            // console.log(res.data);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetch();
    }, [postId])
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {
                !loading ? (<div className="flex-grow px-8 md:px-[100px] lg:px-[200px] mt-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold text-black sm:text-3xl md:text-3xl pr-2">{post.title}</h1>
                        {
                            (user?._id == post.userId) ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <p onClick={() => navigate(`/edit/${postId}`)}className="text-xl sm:text-2xl md:text-3xl hover:scale-110 cursor-pointer"><FiEdit /></p>
                                    <p onClick={handlePostDeletion} className="text-xl sm:text-2xl md:text-3xl hover:scale-110 cursor-pointer"><MdDelete /></p>
                                </div>) : null
                        }
                    </div>
                    <div className="flex items-center justify-between mt-2 md:mt-4">
                        {/* todo */}
                        <p>@{post.username}</p>
                        <div className="flex space-x-2 text-sm text-gray-500">
                            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
                            <p>{new Date(post.updatedAt).toString().slice(15, 24)}</p>
                        </div>
                    </div>
                    <img src={IF + "/" + post.photo} alt="post image" className="w-full mx-auto mt-8 rounded-lg shadow-lg" />
                    <p className="mx-auto mt-8">{post.description}</p>
                    <div className="flex items-center mt-8 space-x-4 font-semibold">
                        <p>Categories:</p>
                        <div className="flex justify-center items-center space-x-2">
                            {
                                post.categories?.map((category, idx) => (
                                    <div key={idx} className="bg-gray-300 rounded-lg px-3 py-1">{category}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <h3 className="mt-6 mb-4 font-semibold"></h3>
                        <Comment />
                    </div>
                    {/* write a comment */}
                    <div className="flex flex-col w-full mt-4 md:flex-row">
                        <input
                            type="text"
                            placeholder="Write a comment"
                            className="md:w-[80%] bg-slate-200 border-2 border-black outline-none px-4 mt-4 md:mt-0 rounded-lg h-14 md:rounded-l-xl md:rounded-r-none"
                        />
                        <button
                            className="bg-black text-white text-sm px-4 py-2 md:px-2 md:w-[20%] mt-4 md:mt-0 rounded-lg md:rounded-r-xl md:rounded-l-none"
                        >
                            Add Comment
                        </button>
                    </div>

                </div>) : (<div className="h-[40vh] flex justify-center items-center"><Loader /></div>)
            }
            <Footer />
        </div>
    );
};

export default PostDetails;
