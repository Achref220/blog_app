import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("https://blogappdot.herokuapp.com/api/categories");
            setCats(res.data)
        };
        getCats();
    }, [])
    
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img5" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos aliquid, 
                velit unde facilis illo, nihil ducimus corporis soluta,
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarlist">
                {cats.map((c) => (
                    <Link className='link1' key={c._id} to={`/?cat=${c.name}`}>
                        <li className="sidebarlistItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-whatsapp"></i>
            </div>
        </div>
    </div>
  )
}

export default SideBar