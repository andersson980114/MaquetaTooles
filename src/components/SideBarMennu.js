import '../styles/SideBar.css'
import { MdOutlineDashboard } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { SlEarphones } from 'react-icons/sl';
import { ImKey2 } from 'react-icons/im'; 
import { AiOutlineMenu } from 'react-icons/ai';  
import { RiShoppingBag3Line } from 'react-icons/ri';
import {  motion } from 'framer-motion';

import React, {useState} from 'react'
import Item_side    from './Item_side';

const SideBarMennu = () => {
    const Item = Item_side
    const [open, setOpen] = useState(true);
     // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "14rem", 
    },
    false: { 
      width: "4.2rem", 
      
      backgroundColor: "#f7f9fd",
      transition: { 
        delay: 0.2,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: { 
      width: "4rem", 
      transition: {
        delay: 0.2,
         
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "center",
      marginTop: "2rem",
      width: "3rem", 
    },
  };

  const userVariants ={
    true:{},
    false:{ 
      backgroundColor: "#f2f5fe", 
       
    }
  }

  const userInfoVariants ={
    true:{},
    false:{
      opacity: 0,
      display: 'none' 
    }
  }

  const groupsVariants ={
    true:{ 
      borderBottom: '1px solid #1d2f68 ',
    },
    false:{ 
      margim: '0px',
      padding: 'px',
      width: '70%',
      alignItems: 'center',
    justifyContent: 'flex-start',
    }
  }
    return ( 
        <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          <motion.div className='userInfo'
            initial={`${open}`}
            animate={`${open}`}
            variants={userVariants}
            >
            {/* lines_icon */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 180,  
              }}
              onClick={handleToggle}
              className="lines_icon"
            >
            
            <AiOutlineMenu />
            </motion.div>

            <motion.div
              initial={`${open}`}
              animate={`${open}`}
              variants={userInfoVariants}
              className="dataUser"
            >
              <h4>User Name</h4> 
              <p>UserEmail@gmail.com</p>
            </motion.div>
            {/* profile */}
            <motion.div
              layout
              initial={`${open}`}
              animate={`${open}`}
              variants={profileVariants}
              className="profile"
              transition={{ duration: 0.3 }}
              whileHover={{  
                cursor: "pointer",
              }}
            >
            <img className='user_img'
              src="https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg"
              alt="profile_img"
            />

            </motion.div>  
          </motion.div>
 
            <motion.div
              initial={`${open}`}
              animate={`${open}`}
              variants={groupsVariants}
              className='contentGroups'
              >
              <div className="groups">
                {/* group 1 */}
                <div className="group">
                  <motion.span
                    animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
                  >
                    MENÚ
                    <hr/>
                  </motion.span>
                  <Item icon={<MdOutlineDashboard />} name="Dashboard" />
                  <Item icon={<ImKey2 />} name="Vigilancia judicial" />
                  <Item icon={<IoMdNotificationsOutline />} name="Asistencia legal" />
                  <Item icon={<SlEarphones />} name="Traking de procesos" /> 
                  <Item icon={<RiShoppingBag3Line />} name="Gestión de mi plan" />
                </div> 
              </div> 
            </motion.div> 
          {/* groups */}
        </motion.div>
      </motion.div> 
    )
}

export default SideBarMennu