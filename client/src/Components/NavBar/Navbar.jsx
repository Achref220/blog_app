import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './navbar.css'
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blogappdot.herokuapp.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    toast.info("LOGGED OUT !!!")
  }
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-whatsapp"></i>
      </div>
      <div className="topCenter">
        <ul className='topList'>
          <li className='toplistitem'><Link className='link1' to="/">HOME</Link></li>
          <li className='toplistitem'><Link className='link1' to="/contact">CONTACT</Link></li>
          <li className='toplistitem'><Link className='link1' to="/write">WRITE</Link></li>
          <li className='toplistitem' onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <>
            {(user.profilePicture ? <img className='topImg' src={PF + user.profilePicture} alt="p-img" /> : <img src='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png' className='topImg'/>)}
            <Link className='settings6' to="settings"><i className="fa-solid fa-gear"></i></Link>
            </>
          ) : (
            <ul className='topList'>
            <li className='toplistitem'><Link className='link1' to="/login">LOGIN</Link></li>
            <li className='toplistitem'><Link className='link1' to="/register">REGISTER</Link></li>
            </ul>
          )
        }
        
        
      </div>
    </div>
  )
}

export default Navbar