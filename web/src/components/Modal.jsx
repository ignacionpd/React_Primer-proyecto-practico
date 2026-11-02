import './Modal.css'

export function Modal({isOpen, onClose, img, tipo, ciudad, precio, habitaciones, banios, metros}) {
    
    if(!isOpen) return null
    
    return (
        <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times; 
                </button>

                <img src={img} alt={tipo} className="modal-image"/>

                <div className="modal-info">
                    <h2>{tipo}</h2>
                    <p>Ciudad: {ciudad}</p>
                    <p>Precio: {precio}</p>
                    <p>Habitaciones: {habitaciones}</p>
                    <p>Baños: {banios}</p>
                    <p>Metros: {metros}m2</p>
                </div>
            </div>
        </div>
    )
}