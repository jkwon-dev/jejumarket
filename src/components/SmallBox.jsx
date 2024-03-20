import React, { useState } from 'react'
import MessageCard from './MessageCard'
import { AiFillMessage } from "react-icons/ai";
import useMessage from '../hooks/useMessage';


function SmallBox() {
  const [open, setOpen] = useState(false);
  const { messageQuery: { data: messages}} = useMessage(); 

  return (
    <div className=' bg-orange-500 sticky bottom-3 float-right rounded-md p-2'>
        <div className='relative'>
            {open &&  <MessageCard key={messages.createdAt} messages={messages}/> }
            <div className='flex flex-row justify-items-center content-center'>
                <AiFillMessage className='text-3xl text-white'/>
                <button className='text-1xl font-bold ml-3 text-white hover:scale-110' 
                onClick={()=> setOpen(!open)}>{open ? '문의 종료하기': '제품 문의하기' }</button>
            </div>
        </div>
    </div>
  )
}

export default SmallBox