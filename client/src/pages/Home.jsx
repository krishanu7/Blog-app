import HomePosts from "../components/HomePosts"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 md:px-6">
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
        <HomePosts />
      </div>
      <Footer />
    </>
  )
}

export default Home