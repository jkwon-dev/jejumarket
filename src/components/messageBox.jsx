import React from 'react'

function messageBox(props) {
  return (
    <li className='flex justify-end  m-1 ml-20 p-1 '>
        <p className='bg-white m-1 p-1 rounded-md'>{props.message}</p>
    </li>
  )
}

export default messageBox