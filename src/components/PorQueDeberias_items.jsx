import React from 'react'
import '../../src/assets/styles/porQueDeberias_items.css'

export default function PorQueDeberias_items() {
  return (
    <div className='itemsContenedor'>
      <div className="itemContenedor">
        <div className='numero'>1</div>
        <h2 className='item_titulo'>Proveemos las mejores opciones en habitaciones</h2>
        <p className='item_parrafo'>
          Garantizamos una selección incomparable de habitaciones que supera todas las expectativas, brindando comodidad y estilo inigualables para cada preferencia y necesidad.
        </p>
      </div>

      <div className="itemContenedor">
        <div className='numero'>2</div>
        <h2 className='item_titulo'>Vistas increibles</h2>
        <p className='item_parrafo'>
          Ofrecemos un espectaculo visual natural en cada rincon del hotel, que dara a su estadia un encanto inigualable de principio a fin.
        </p>
      </div>

      <div className="itemContenedor">
        <div className='numero'>3</div>
        <h2 className='item_titulo'>Servicio de Restaurant</h2>
        <p className='item_parrafo'>
          Disfruta de la excelencia culinaria con nuestro servicio de restaurante, donde cada plato es una obra maestra que deleita los sentidos.
        </p>
      </div>
    </div>
  )
}
