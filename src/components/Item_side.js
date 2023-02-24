import '../styles/Item_side.css'
import React from 'react'
import {motion} from 'framer-motion' 
const Item_side = ({icon, name}) => {
    const subheading ={
        true:{
            opacity: 1
        },
        false:{
            opacity: 0,
            display: 'none'
        }
    }
    //8b99c9
  return (
    <motion.div className='item'
    whileHover = {{ 
        backgroundColor: "#dee6fc", 
        cursor: 'pointer',
        fontWeight: 'bold'
    }}
    transition={{
         duration: 0.0
    }}
    >
        <motion.div className='icon'>
            {icon}
        </motion.div>
        <motion.label
        variants={subheading}
        >
            {name}
        </motion.label>
    </motion.div>
  )
}

export default Item_side