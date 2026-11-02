import { useState } from 'react'
import properties from '../data/propiedades.json'
import { CardCasasDestacadas } from './CardCasasDestacadas'
import { IconoFlechaDch } from './Iconos/IconoFlechaDch'
import { IconoFlechaIzq } from './Iconos/IconoFlechaIzq'

import './CasasDestacadas.css'

export function CasasDestacadas() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const featuredProperties = properties.filter((property) => property.destacada )

    const handleNext = () => {
        //Avanzar al siguiente índice
        if (currentIndex + 1 < featuredProperties.length) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrev = () => {
        //Retroceder al anterior
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    // Deshabilitar flechas si se llega al límite de foto (1º o la última)
    const isNextDisabled = currentIndex + 1 >= featuredProperties.length
    const isPrevDisabled = currentIndex === 0

    return (
        <div className="container-lg">
            <h2>Destacadas de las semana</h2>
            <div className="carousel-container">
                <IconoFlechaIzq 
                    onClick={handlePrev}
                    disabled={isPrevDisabled}
                />
                <div className="propiedades-container">
                    <CardCasasDestacadas
                        img={featuredProperties[currentIndex].img}
                        tipo={featuredProperties[currentIndex].tipo}
                        precio={featuredProperties[currentIndex].precio}
                        ciudad={featuredProperties[currentIndex].ciudad}
                        habitaciones={featuredProperties[currentIndex].habitaciones}
                        banios={featuredProperties[currentIndex].banios}
                        descripcion={featuredProperties[currentIndex].descripcion}
                    />    
                </div>
                <IconoFlechaDch 
                    onClick={handleNext}
                    disabled={isNextDisabled}

                />
            </div>
        </div>
    )
}