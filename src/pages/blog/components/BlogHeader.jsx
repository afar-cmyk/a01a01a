import React from 'react'
import PropTypes from 'prop-types'

export default function BlogHeader(props) {
  // propiedades del componente
  const { title, date } = props

  // Estilos del componente
  const titleContainer = {
    textAlign: 'justify',
    textAlignLast: 'left'
  }

  const dateContainer = {
    fontSize: '1rem'
  }

  return (
    <>
      <div style={{ ...titleContainer }}>
        <span style={{ dateContainer }}>{date}</span>
        <h1>{title}</h1>
      </div>
    </>
  )
}

// PropTypes para definir los props del componente

BlogHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string
}

BlogHeader.defaultProps = {
  title: 'Hello World',
  date: '00/00/0000'
}
