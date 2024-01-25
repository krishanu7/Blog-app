import axios from "axios";
import HomePosts from "../components/HomePosts"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { useLocation } from "react-router-dom";
const Home = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
//Implement that whenever search field is changegin accordingly req should be send
  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      console.log(search);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, [search])
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-6">
        {
          posts.map((post) => (
            <HomePosts key={post._id} post={post} />
          ))
        }
      </div>
      <Footer />
    </>
  )

}

export default Home