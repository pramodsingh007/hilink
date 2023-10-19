import React from 'react'

function Content({children,className}) {
  return (
<p className={` text-gray-600 ${className}`}>{children}</p>
  )
}

export default Content