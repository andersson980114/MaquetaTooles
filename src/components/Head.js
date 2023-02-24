import React from 'react'
import '../styles/Head.css'
import Switche from './Switche'

function Head() {
  return (
    <div className='headContainer'>
        <div className='product'>
            <div className='time'>
                <span >
                    Miercoles 27 Jul. 9:43 am
                </span>
            </div>
         
           <div className='welcome'>
                <h1 style={{marginTop:0}}>
                    ¡Hola User!
                </h1> 
           </div>
           <div  className='message'>
            <span>
                Actualiza tu plan para vigpro para obtener mejores beneficios
            </span>
           </div>
           <div  className='plan'>
            <span>
                Plan premium - Este plan vence en 364 dias
            </span>
            <div>
                <Switche/> 
            </div>
           </div>
        </div>
    </div>
  )
}

export default Head