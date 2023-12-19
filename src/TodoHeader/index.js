import React from 'react'

const TodoHeader = ({ children, loading }) => {

  return (
    <div>
        {/* Cuando vamos a usar el cloneElement en mas de un elemento toca combinarlo con React.Children para que funcione */}
        {React.Children.toArray(children).map(child => React.cloneElement(child, {loading: loading }))}
    </div>
  )
}

export { TodoHeader }