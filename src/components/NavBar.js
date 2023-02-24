import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import '../styles/NavBar.css'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar_container'>
      <div className='optionName'>
          <div className='optionImg'>
            <img className='logo_img'
              src="https://tooles.co/wp-content/uploads/2022/09/TOOLES-A-M-1024x192.png"
              alt="profile_img"
            />
          </div>
          <span>| Gestión de mi plan</span>
      </div>

      <div className='userDataa'>
        <div className='search'>
          <input type="text" placeholder='Buscar Algun servicio' className='searchService'/>
          <BsSearch/>
        </div>

        <div className='notification'>
          <IoMdNotificationsOutline/>
        </div>

        <div className='user'>
                <h4>User Name</h4> 
                <p>Rol</p>
        </div>
        <div className='profile'>
          <img className='user_img'
                  src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg"
                  alt="profile_img"
                />
          </div>
        </div>
    </div>
  )
}

export default NavBar