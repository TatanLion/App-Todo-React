import React from 'react'
import './index.css'

const EmptySearchResults = ({ searchValue }) => {
  return (
    <p className='no-search-results'>No se encontraron resultados para <span>{searchValue}</span></p>
  )
}

export { EmptySearchResults }