import React from 'react'
import "../styles/Filas.css"
import { Top } from './Top'
import { Medio } from './Medio'
import { bottom } from './bottom'

function Filas() {
  return (
    <div>
        <Top/>
        <Medio/>
        <bottom/>
    </div>
  )
}

export { Filas }