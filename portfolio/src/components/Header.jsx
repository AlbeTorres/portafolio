import React from 'react'
import '../index.css'
const Header = ({children}) => {
  return (
    <div className='w-full h-fit banner '>
        {children}
    </div>
  )
}

export default Header