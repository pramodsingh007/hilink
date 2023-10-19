import React from 'react'

function DownloadBtn({children,className}) {
  return (
    <button className={`w-full rounded-full text-green-800 p-3 flex place-items-center justify-center   font-medium ${className}`}>
        {children}
    </button>
  )
}

export default DownloadBtn