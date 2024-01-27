import axios from "axios";
import HomePosts from "../components/HomePosts"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader"
import { URL } from "../url";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      setPosts(res.data);
      if (res.data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchPosts();
  }, [search])
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow px-4 md:px-6">
        {loading ? <div className="h-[40vh] flex justify-center items-center"><Loader /></div> : !noResults ? (
          posts.map((post) => (
            <Link key={post._id} to={user?`/posts/post/${post._id}` : "/login"}>
              <HomePosts post={post} />
            </Link>
          ))
        ) : (
          <h1 className="text-center font-bold mt-[20%]">No posts available</h1>
        )}
      </div>
      <Footer />
    </div>
  )

}

export default Home