import React from 'react'

const Btn = ({randomColor, getRandomAll}) => {

  // Elemento de color dinamico para cambiar color del boton
  const backgroundObj = {
    backgroundColor: randomColor
  }

  //Componente boton que se utiliza para renderizar una nueva cita atraves del evento onClick
  /* este componente se integra en el componente QuoteBox el cual
    tiene propiedades (props) en App que a su vez soy usadas en Btn trayendolas desde QuoteBox
  */
  return (
    <button className='card__btn' style={backgroundObj} onClick={getRandomAll}>-&gt;</button>
  )
}

export default Btn