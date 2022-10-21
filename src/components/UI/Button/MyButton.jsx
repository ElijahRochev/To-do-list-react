import React from 'react'
import myBtn from './MyButton.css'
export default function MyButton({children, ...props}) {
  return (
    <button {...props} className='myBtn'>
        {children}
    </button>
  )
}
