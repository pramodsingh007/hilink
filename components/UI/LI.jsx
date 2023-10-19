import React from 'react'

function LI({children}) {
  return (
    <li className=' hover:text-cyan-500 hover:font-bold'>
        {children}
    </li>
  )
}

export default LI