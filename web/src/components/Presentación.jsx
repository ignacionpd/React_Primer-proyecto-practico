import { BarraBusqueda } from './BarraBusqueda'
import './Presentacion.css'

export function Presentacion({ onSearch }) {
    return (
        <div className="container-xl">
            <div className="container-lg">
                <h2>Encuentra la casa que estabas buscando con nuestra ayuda</h2>
                <BarraBusqueda onSearch={onSearch}/>
            </div>
        </div>
    )
}