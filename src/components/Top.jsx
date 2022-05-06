import React from 'react'
import "../styles/Top.css"

function Top() {
    const numero='1'
    const topic='Agenda/Topic'
    const codigo='SAAAS-0000'
    const simbolo='x'
  return (
      <div>
         <span>{numero}</span>
         <span>{`$${topic}`}</span>
         <span>{`$${codigo}`}</span><span></span>
         <span>{`$${simbolo}`}</span>
      </div>
  )
}

export  { Top }