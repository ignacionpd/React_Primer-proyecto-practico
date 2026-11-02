import './ResultadoBusqueda.css'
import properties from '../data/propiedades.json'
import { CardCasas } from './CardCasas'

export function ResultadosBusqueda({ ciudad }) {
    const filteredProperties = properties.filter((property) => property.ciudad.toLowerCase() === ciudad.toLowerCase())

    if (!ciudad) {
        return null
    }

    return (
        <div className="container-lg">
            <h2>Propiedades disponibles en {ciudad}</h2>
            <div className="propiedades-container">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property, index) => (
                        <CardCasas
                            key={index}
                            img={property.img}
                            tipo={property.tipo}
                            ciudad={property.ciudad}
                            precio={property.precio}
                            habitaciones={property.habitaciones}
                            banios={property.banios}
                            metros={property.metros}
                        />
                    ))
                ) : (
                    <p>No se encontraron propiedades en esta ciudad.</p>
                )}
            </div>
        </div>
    )
}