import { FiUpload } from "react-icons/fi";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";

const CreatePost = () => {
    const postId = useParams().id;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const fetchPost = async () => {
        const post = await axios.get(URL + "/api/posts/" + postId);
        //console.log(post.data);
        setTitle(post.data.title);
        setFileName(post.data.photo);
        setCats(post.data.categories);
        setDescription(post.data.description);
    }
    useEffect(() => {
        fetchPost();
    }, [postId]);

    const deleteCategory = (categoryToDelete) => {
        setCats(prevCats => prevCats.filter(category => category !== categoryToDelete));
    }

    const addCategory = () => {
        console.log(file.name);
        if (!cat.trim()) return;
        setCats(prevCats => [...prevCats, cat.trim()]);
        setCat("");
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const post = {
            title,
            description,
            username: user.username,
            userId: user._id,
            categories: cats
        }
        if (file) {
            const data = new FormData();
            const curfileName = Date.now() + file.name;
            data.append("img", curfileName);
            data.append("file", file);
            post.photo = curfileName;
            try {
                const imgUpload = await axios.post(URL + "/api/upload", data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.put(URL + "/api/posts/" + postId, post, { withCredentials: true });
            navigate("/posts/post/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex flex-col min-h-full">
            <Navbar />
            <div className="flex-grow px-8 md:px-[100px] lg:px-[200px] mt-8">
                <h1 className='font-bold md:text-2xl text-xl mt-8'>Create a post</h1>
                <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter post title' className='px-4 py-2 h-12 outline-none bg-slate-200 rounded-lg' />
                    <div className="flex flex-row items-center space-x-2">
                        <div className='flex w-[35%] sm:w-[25%] items-center space-x-4 px-2 py-2 bg-slate-200 rounded-lg'>
                            <label htmlFor="file" className="flex mx-auto items-center space-x-2 cursor-pointer">
                                <FiUpload />
                                <span>Upload file</span>
                            </label>
                            <input
                                onChange={(e) => {
                                    setFile(e.target.files[0]);
                                    setFileName(e.target.files[0].name);
                                }}
                                type="file"
                                id="file"
                                className="hidden"
                            />
                        </div>
                        {fileName && <div className="text-sm text-gray-500">{fileName}</div>}
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-4 md:space-x-8'>
                            <input value={cat} onChange={(e) => setCat(e.target.value)} type="text" placeholder='Enter post category' className='px-4 py-2 outline-none bg-slate-200 rounded-lg' />
                            <div onClick={addCategory} className="bg-black text-white px-4 py-2 font-semibold transition duration-300 rounded-lg cursor-pointer hover:bg-gray-800 hover:text-gray-100">Add</div>
                        </div>
                        {/* categories */}
                        <div className="flex px-2 mt-3">
                            {cats?.map((category, idx) => (
                                <div key={idx} className="flex justify-center items-center space-x-1 mr-4 bg-slate-200 px-2 py-1 rounded-md">
                                    <p>{category}</p>
                                    <p onClick={() => deleteCategory(category)} className="text-lg cursor-pointer pl-1"><RxCross2 /></p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} name="post-description" id="1" cols={30} rows={13} className="px-4 py-2 outline-none  bg-slate-200 rounded-md" placeholder="Enter post description" />
                    <button onClick={handleCreate} className="bg-black text-white transition duration-300 ease-in-out px-2 py-2 md:w-[30%] mt-4 md:mt-0 rounded-lg cursor-pointer hover:bg-gray-800 hover:text-gray-100">Create</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreatePost;
