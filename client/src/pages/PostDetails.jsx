import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import Comment from "../components/Comments"

const PostDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="px-8 md:px-[100px] lg:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-black sm:text-3xl md:text-3xl pr-2">10 Uses of Artificial Intelligence in Day to Day Life</h1>
                    <div className="flex items-center justify-center space-x-2">
                        <p className="text-xl sm:text-2xl md:text-3xl hover:scale-110 cursor-pointer"><FiEdit /></p>
                        <p className="text-xl sm:text-2xl md:text-3xl hover:scale-110 cursor-pointer"><MdDelete /></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@krishanudev</p>
                    <div className="flex space-x-2 text-sm text-gray-500">
                        <p>19/01/2024</p>
                        <p>18:25</p>
                    </div>
                </div>
                <img src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg" alt="" className="w-full mx-auto mt-8" />
                <p className="mx-auto mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laboriosam id quo harum maxime sapiente nobis eligendi, vel consequuntur voluptates dolore nihil adipisci dignissimos corporis recusandae! Nihil labore laudantium maxime.
                    Nemo omnis neque magni beatae facere repudiandae, obcaecati quos, eius facilis veniam reprehenderit praesentium cumque, earum porro corrupti totam! Labore animi itaque quas at nostrum amet soluta illum. Aspernatur, est!
                    Quo error odio nostrum blanditiis officiis? Quia reprehenderit consequatur totam consequuntur harum! Repellendus explicabo temporibus nemo qui dolores sunt, minus dolor, molestiae beatae ea autem tempora corrupti voluptas quia deleniti?</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Categories:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
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

            </div>
            <Footer />
        </div>
    );
};

export default PostDetails;
