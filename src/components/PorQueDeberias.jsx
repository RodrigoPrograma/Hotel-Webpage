import React from 'react'
import Servicios from './Servicios'
import PorQueDeberias_titulo from './PorQueDeberias_titulo'
import '../assets/styles/PorQueDeberias_titulo.css'
import PorQueDeberias_parrafo from './PorQueDeberias_parrafo'
import PorQueDeberias_foto from './PorQueDeberias_foto'
import PorQueDeberias_items from './PorQueDeberias_items'

export default function PorQueDeberias() {
  return (
    <div>
      <Servicios/>
      <PorQueDeberias_titulo />
      <PorQueDeberias_parrafo />
      <PorQueDeberias_foto />
      <PorQueDeberias_items />
    </div>
  )
}
