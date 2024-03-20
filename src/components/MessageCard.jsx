import React, { useEffect, useState } from 'react'
import moment from 'moment';
import useMessage from '../hooks/useMessage';
import MessageBox from './messageBox';

function MessageCard(props) {
    const [today, setToday] = useState('');
    const [newMessage, setNewMessage] = useState();
    const { addOrUpdateMessages} = useMessage(); 

    useEffect(() => {
        const date = Date.now();
        const formattedDate = moment(date).format(' YYYY.MM.DD ');
        setToday(formattedDate)
    }, [])

    const HandleSubmit= (e) => {
        e.preventDefault();
        if (!newMessage) {
            return 
        } else {
            addOrUpdateMessages.mutate(newMessage)
        setNewMessage('')
        }
    }


  return (
   
    <div className='flex flex-col'>
        <div className='flex  flex-col justify-center place-items-center'>
            <p className='text-4xl font-semibold'>문의하기</p>
            <p>{today}</p>
        </div>
        <div className= 'flex flex-col justify-start bg-white rounded-md my-2 p-2'>
            <p>제주 마켓에 오신 것을 환영합니다 🍊 </p>
            <p>문의 사항이 있으면 여기에서 메시지를 보내주세요~</p>
        </div>
        <div>
            <ul>
       {props.messages && props.messages.map((message) => (
        <MessageBox message={message.message}/>
       ))} 
       </ul>
        </div>
        <div className='flex justify-end mt-30 '>
            <form onSubmit={HandleSubmit}>
                <textarea
                rows='1'
                className='w-200 rounded-md p-4'
                type='text'
                required
                value={newMessage}
                onChange={(e)=> setNewMessage(e.target.value)}
                >
                </textarea>
                <button className= ' bg-white  self-center rounded-md text-1xl font-bold text-orange-400 ml-1'
                    onClick={HandleSubmit}
                >보내기</button>
            </form>
        </div>
    </div>
  )
}

export default MessageCard