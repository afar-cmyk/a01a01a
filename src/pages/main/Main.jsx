import React from 'react'
import { useNavigate } from 'react-router-dom'
import decoLeft from '../../assets/decoLeft.svg'
import decoRight from '../../assets/decoRight.svg'
import logo from '../../assets/logo/logo.svg'
import './main.css'

const Main = () => {
  // // Hook de react-router-dom para redirigir a una pagina en especifico
  const navigate = useNavigate()

  // // Cambia el numero de segundos para redirigir a la pagina Blog
  const [contador, setContador] = React.useState(5)

  React.useEffect(() => {
    // Decrementa el contador cada segundo
    const decremento = setTimeout(() => {
      setContador(contador - 1)
    }, 1000)

    // Si el contador es igual a cero, se carga la pagina Blog
    if (contador === 0) {
      navigate('/blog')
    }

    // Limpia el contador al desmontar el componente
    return () => {
      clearTimeout(decremento)
    }
  }, [contador, navigate])

  return (
    <div>
      <div
        style={{
          height: 'auto',
          width: '100%'
        }}
      >
        <div className="contenedor">
          <img
            src={decoRight}
            alt="right decoration"
            className="decorations"
            style={{ alignSelf: 'flex-end' }}
          />
          <center>
            <img id="logo" src={logo} alt="logo" className="logo" />
            <span>
              <p className="texto-principal">
                Será redirigido en {contador} segundos
              </p>
            </span>
          </center>

          <img src={decoLeft} className="decorations" alt="left decoration" />
        </div>
      </div>
    </div>
  )
}

export default Main
