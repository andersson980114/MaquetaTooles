import React from 'react'

import { BsFillExclamationCircleFill } from 'react-icons/bs'; 
import '../styles/Products.css'

const Products = () => {
  return (
    <div className='productContainer'>
        <div className='productHead'>
            <span>
                Selecciona la modalidad de pago 
            </span>
            <button className='btn btn-outline-dark btn-sm rounded-pill mx-2'  > anual</button>
            
            <button className='btn btn btn-outline-dark  btn-sm rounded-pill'> Mensual</button>
        </div>

        <div className='productContent'>
            <div className=''>
                <p className='infoText'>
                <p className='exlcamation'>
                    <BsFillExclamationCircleFill/>
                </p>
                    En el plan actual, puedes ver un resumen del consumo de tu plan. Si quieres ver una mejor vizualización de tu plan te invitamos a ver el Dashboard</p>

            </div>

            <div>
                <table>
                    <tr>
                        <th>    
                            <div className='PlanM'>
                                <p className='sol'>
                                    Soluciones
                                </p>
                                <p className='desc '>
                                    El valor de los planes incluye iva
                                </p>

                            </div>
                        </th>
                        <th>
                            <p className='plan'>
                                 Plan Demo   
                            </p>
                            <div className='PrecioPlanM'>
                                <p className='valor'> $0,0</p> <p className='mensual'>cop mensual</p> 
                            </div>
                            <div className='PrecioPlanA'>
                                 $0,0 cop anual   
                            </div>
                            <button>Seleccionar Plan</button>
                        </th>
                        <th>
                            <p className='plan'>
                                 Plan Demo   
                            </p>
                            <div className='PrecioPlanM'>
                                <p className='valor'> $0,0</p> <p className='mensual'>cop mensual</p> 
                            </div>
                            <div className='PrecioPlanA'>
                                 $0,0 cop anual   
                            </div>
                            <button>Seleccionar Plan</button>
                        </th>
                        <th>
                            <p className='plan'>
                                 Plan Demo   
                            </p>
                            <div className='PrecioPlanM'>
                                <p className='valor'> $0,0</p> <p className='mensual'>cop mensual</p> 
                            </div>
                            <div className='PrecioPlanA'>
                                 $0,0 cop anual   
                            </div>
                            <button>Seleccionar Plan</button>
                        </th>
                        <th>
                            <p className='plan'>
                                 Plan Demo   
                            </p>
                            <div className='PrecioPlanM'>
                                <p className='valor'> $0,0</p> <p className='mensual'>cop mensual</p> 
                            </div>
                            <div className='PrecioPlanA'>
                                 $0,0 cop anual   
                            </div>
                            <button>Seleccionar Plan</button>
                        </th>
                    </tr>
                    <tr>
                        <td>Plan judicial</td>
                        <td>1 Vigilancia</td>
                        <td>10 Vigilancias</td> 
                        <td>13/30 Vigilancias disponibles</td> 
                        <td>80 Vigilancias</td> 
                    </tr>
                    <tr>
                        <td>alerta de procesos</td>
                        <td>1 alerta para 1 proceso</td>
                        <td>10 alertas</td> 
                        <td>29/30 alertas disponibles</td> 
                        <td>80 alertas</td> 
                    </tr>
                    <tr>
                        <td>Asistencia Legal</td>
                        <td>1 hora de asistencia </td>
                        <td>4 horas de asistencia </td>
                        <td>8.5/10 horas de asistencia </td>
                        <td>20 horas de asistencia </td> 
                    </tr>
                    <tr>
                        <td>Automatización de documentos</td>
                        <td>1 automatización </td>
                        <td>10 automatizaciones </td>
                        <td>30 automatizaciones </td>
                        <td>50 automatizaciones </td> 
                    </tr>
                    <tr>
                        <td>Usuarios</td>
                        <td>1 usuario </td>
                        <td>2 usuarios</td>
                        <td>5 usuarios</td>
                        <td>10 usuarios</td>
                    </tr>
                    <tr>
                        <td>Almacenamiento en la nube</td>
                        <td> 5 GB </td>
                        <td> 100 GB </td>
                        <td> 0.5/200 GB en uso </td>
                        <td> 500 GB </td>
                    </tr>
                     
                </table>
            </div>
        </div>
    
    </div>
  )
}

export default Products