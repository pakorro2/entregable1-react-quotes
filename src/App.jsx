import './App.css'
import { useState } from 'react'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'

function App() {

const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

// Variable que guarda el valor del arreglo seleecionado por su indice aleatoriamente 
const firstQuote =quotes[getIndexRandom(quotes)]
const firstColor =color[getIndexRandom(color)]

// Usando useState para definir el valor inicical
const [randomQuote, setRandomQuote] = useState(firstQuote)
const [randomColor, setRandomColor] = useState(firstColor)

//Color de fondo apartir del color aleatorio obtenido atravez de la funcion
const backgroundObjet ={
  backgroundColor: randomColor
}

// Actualizando los estados con setState para usar en el boton
const getRandomAll = () => {
  setRandomQuote(quotes[getIndexRandom(quotes)])
  setRandomColor(color[getIndexRandom(color)])
}
// Componente principal que renderiza nuestro contenido dinamico
  return (
    <div style ={backgroundObjet} className="App">
      <QuoteBox 
      randomQuote={randomQuote}
      randomColor={randomColor}
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
