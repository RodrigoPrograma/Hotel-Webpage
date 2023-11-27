import React from 'react';
import '../assets/styles/servicesCards.css';

export default function ServicesCards() {
  return (
    <div className='serviceCards_container' id='servicios'>

      <div className="card">
        <div className="card_Icono">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328"
            />
          </svg>
        </div>
        <div className="card_Titulo">Restaurant</div>
        <div className="card_Parrafo">
          Deléitese con nuestro restaurante especializado en exquisitos peces de agua dulce frescos y auténticos.
        </div>
      </div> 

      <div className="card">
        <div className="card_Icono">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z" />
          </svg>
        </div>
        <div className="card_Titulo">Las Mejores Habitaciones</div>
        <div className="card_Parrafo">
          Experimenta la excelencia con nuestras incomparables habitaciones, donde el lujo y la comodidad convergen perfectamente.
        </div>
      </div> 

      <div className="card">
        <div className="card_Icono">
          <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
            <path d="M20.787 9.023c-.125.027-1.803.418-3.953 1.774-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827 5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12 5.981 0 10-4.822 10-12V8.758l-1.213.265zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a18.933 18.933 0 00-3.01 3.154 19.877 19.877 0 00-2.991-3.113v-.128zM12 20c-5.316 0-7.549-4.196-7.937-8.564 1.655.718 4.616 2.426 7.107 6.123l.841 1.249.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20z" />
          </svg>
        </div>
        <div className="card_Titulo">Spa y Bienestar</div>
        <div className="card_Parrafo">
          Sumérgete en la serenidad de nuestro spa, donde el bienestar cobra vida con tratamientos rejuvenecedores y experiencias relajantes inigualables.
        </div>
      </div> 

      <div className="card">
        <div className="card_Icono">
          <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          >
          <path d="M20.832 4.555A1 1 0 0020 3H4a1 1 0 00-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zM12 14.197L8.535 9h6.93L12 14.197zM18.132 5l-1.333 2H7.201L5.868 5h12.264z" />
        </svg>
        </div>
        <div className="card_Titulo">Bar Salón</div>
        <div className="card_Parrafo">
          Disfruta de momentos sociales en nuestro elegante bar salón, donde las bebidas premium se mezclan con una atmósfera acogedora.
        </div>
      </div>      
    </div>
  )
}
