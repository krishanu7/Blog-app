import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import About from "./pages/About";
import MyBlogs from "./pages/MyBlogs";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/write" element={<CreatePost />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts/post/:id" element={<PostDetails />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/myblogs/:id" element={<MyBlogs />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
};

export default App;
