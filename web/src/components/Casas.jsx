import { CardCasas } from "./CardCasas"
import './Casas.css'
import properties from '../data/propiedades.json'
import { useState } from "react"
import { Modal } from "./Modal"

const filteredProperties = properties.filter((property) => property.destacada == false || property.destacada == null)

export function Casas() {
    // Estado para ver qué propiedad fue seleccionada
    const [selectedProperty,setSelectedProperty] = useState(null)

    // Estado para ver si esa propiedad seleccionada está abierta o cerrada
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Creamos una función que al hacer click en la propiedad, le pase la info al "ModalOpen" de arriba
    const handleCardClick = (property) => {
        setSelectedProperty(property)
        setIsModalOpen(true)
    }

    // Función para cerrar la propiedad abierta
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (

        <div className="container-lg">
            <h2>Casas disponibles</h2>
            <div className="propiedades-container">
                {filteredProperties.map((property, index) => (
                    <CardCasas 
                        key={index}
                        img={property.img}
                        tipo={property.tipo}
                        ciudad={property.ciudad}
                        precio={property.precio}
                        habitaciones={property.habitaciones}
                        banios={property.banios}
                        metros={property.metros}
                        onCardClick={() => handleCardClick(property)}
                    />    
                ))}
            </div>

            <Modal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                property={selectedProperty}
            />

        </div>
    )
}