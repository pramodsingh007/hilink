import React from 'react'

function Title({children}) {
  return (
    <h1 className='text-white lg:text-7xl sm:text-3xl max-sm:text-3xl'>
        {children}
    </h1>
  )
}

export default Title