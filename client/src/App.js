import Navbar from "./Components/NavBar/Navbar";
import Register from "./Components/Register/Register";
import Home from "./Components/pages/home/Home";
import Write from './Components/pages/write/Write';
import Login from './Components/pages/Login/Login';
import Settings from './Components/pages/settings/Settings';
import Single from './Components/SinglePost/SinglePost'
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import { ToastContainer, toast } from 'react-toastify';
import Contact from "./Components/pages/Contact/Contact";





function App() {
  const  { user } = useContext(Context);
  return (
    <>
    <ToastContainer />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
