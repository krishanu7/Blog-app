import { FiUpload } from "react-icons/fi";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const EditPost = () => {
    const [cat, setCat] = useState("");
    const [cats, setCats] = useState([]);

    const deleteCategory = (categoryToDelete) => {
        setCats(prevCats => prevCats.filter(category => category !== categoryToDelete));
    }
    const addCategory = () => {
        if (!cat.trim()) {  // Prevent adding empty categories
            return;
        }
        setCats(prevCats => [...prevCats, cat.trim()]);
        setCat("");
    }
    return (
        <div>
            <Navbar />
            <div className="px-8 md:px-[100px] lg:px-[200px] mt-8">
                <h1 className='font-bold md:text-2xl text-xl mt-8'>Update a post</h1>
                <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
                    <input type="text" placeholder='Enter post title' className='px-4 py-2 h-12 outline-none bg-slate-200 rounded-lg' />
                    <div className='flex w-[30%] md:w-[20%] items-center space-x-4 px-2 py-2 bg-slate-200 rounded-lg'>
                        <label htmlFor="file" className="flex mx-auto items-center space-x-2 cursor-pointer">
                            <FiUpload />
                            <span>Upload file</span>
                        </label>
                        <input
                            type="file"
                            id="file"
                            className="hidden"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-4 md:space-x-8'>
                            <input value={cat} onChange={(e) => setCat(e.target.value)} type="text" placeholder='Enter post category' className='px-4 py-2 outline-none bg-slate-200 rounded-lg' />
                            <div onClick={addCategory} className="bg-black text-white px-4 py-2 font-semibold rounded-lg cursor-pointer">Add</div>
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
                    <textarea name="post-description" id="1" cols={30} rows={15} className="px-4 py-2 outline-none  bg-slate-200 rounded-md" placeholder="Enter post description" />
                    <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0 rounded-lg">Update</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default EditPost;
