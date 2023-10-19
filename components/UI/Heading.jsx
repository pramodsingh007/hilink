import React from 'react'

function Heading({children,className}) {
  return (
    <h1 className={`${className} lg:text-7xl sm:text-5xl max-sm:text-5xl md:text-6xl font-bold`}>
            {children}
        </h1>
  )
}

export default Heading