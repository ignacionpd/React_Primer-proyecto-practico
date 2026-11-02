import { IconoBusqueda } from "./Iconos/IconoBusqueda";
import './BarraBusqueda.css'
import { useState } from "react";

export function BarraBusqueda({ onSearch }) {
    const [ciudad, setCiudad] = useState('')

    const handleSearch = () => {
        if(ciudad.trim()) {
            onSearch(ciudad)
        }
    }
    
    return (
        <div className="barra-busqueda">
            <div className="busqueda-input">
                <input 
                    type="text" 
                    placeholder="En qué ciudad buscas..." 
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                />
            </div>
            <div className="busqueda-button">
                <div className="button-container" onClick={handleSearch}>
                    <IconoBusqueda />
                    <button >Buscar</button>
                </div>
            </div>

        </div>
    )
}