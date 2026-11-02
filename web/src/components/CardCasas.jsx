import { useState } from 'react'
import './CardCasas.css'
import { Modal } from './Modal'

export function CardCasas({img, tipo, ciudad, precio, habitaciones, metros, banios}) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleCardClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }
    
    return (
        <>
            <div className="property-card" onClick={handleCardClick}>
                <img src={img} alt={tipo} />
                <div className="info">
                    <span className='span-titulo'>{precio}</span>
                    <span className='span-texto'>{tipo} en {ciudad}</span>
                    <span className='span-texto'>{habitaciones} habs . {banios} baños . {metros} m2 </span>
                </div>
            </div>
            {isModalOpen && (
                <Modal 
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    img={img}
                    tipo={tipo}
                    ciudad={ciudad}
                    precio={precio}
                    habitaciones={habitaciones}
                    banios={banios}
                    metros={metros}
                
                />
            )}
        </>
    )    
}