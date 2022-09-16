import React from 'react'
import Btn from './Btn'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

  // Desestructuracion para simplificar
 const {quote,author} = randomQuote

 //cambiando el color de los elementos hijos dentro de card
 const colorObj ={
  color: randomColor
 }
//Componete que muestra la citas aleatoreas y contiene el componente que Btn que cambia a uno nuevo(aleatorio)
  return (
    <article className='card' style={colorObj}>
      <p className='card__quote'>{quote}</p>
      <h1 className='card__author'>{author}</h1>
      <Btn randomColor={randomColor} getRandomAll={getRandomAll}/>
    </article>
  )
}

export default QuoteBox