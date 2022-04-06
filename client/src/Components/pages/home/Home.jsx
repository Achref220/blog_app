import React, { useEffect, useState } from 'react';
import Posts from '../../../Posts/Posts';
import Header from '../../Header/Header';
import SideBar from '../../sideBar/SideBar';
import './home.css';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)
    }
    fetchPosts()
   }, [search])
  
  return (
    <>
    <Header />
    <div className='home'>
        <Posts posts={posts}/>
        <SideBar />        
    </div>
    </>
  )
}

export default Home