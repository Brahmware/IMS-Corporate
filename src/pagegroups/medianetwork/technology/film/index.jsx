import React from 'react'
import FilmContainerOne from './container-1'
import FilmContainerTwo from './container-2'

const Film = (props) => {
  const card = props.data
  console.log(card)
    return (
        <>
            <FilmContainerOne card={card} />
            <FilmContainerTwo card={card} />
        </>
    )
}

export default Film