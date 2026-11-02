import './CardCasasDestacadas.css'

export function CardCasasDestacadas({ img, tipo, ciudad, precio, habitaciones, metros, banios, descripcion }) {
    return (
        <div className="featured-card">
            <img src={img} alt={tipo} />
            <div className="info">
                <span className='span-titulo'>{precio}</span>
                <span className='span-texto'>{tipo} en {ciudad}</span>
                <span className='span-texto'>{habitaciones} habs . {banios} baños . {metros} m2 </span>
                <span className='span-texto'>{descripcion || 'Si quieres saber más acerca de esta fantástica propiedad, no dudes en ponerte en contacto con nosotros'}</span>

            </div>
        </div>

    )
}