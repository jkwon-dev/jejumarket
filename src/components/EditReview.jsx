import React, { useState } from 'react'
import { useAuthContext } from './context/AuthContext';
import { addOrUpdateToReview } from '../api/firebase';

export default function EditReview({ handleEdit, productId, editText}) {
    const { user } = useAuthContext(); 
    const [review, setReview] = useState(editText);


    const handleEditText = (e) => {
        e.preventDefault();
        addOrUpdateToReview(user, productId, review)
        handleEdit(false)
      }


  return (
    <>
    <form className='flex flex-col px-12' onSubmit={handleEditText}> 
        <textarea className='bg-gray-100 h-30 rounded-md p-4'
          type='text' 
          value={review} 
          placeholder='Edit Review' 
          required
          onChange={(e)=> setReview(e.target.value)}>
        </textarea>
        <div className='mt-4'>
        <button className='bg-gray-400 text-white mx-2 px-2 hover:bg-gray-800' type='button' onClick={() => handleEdit(false) }>Cancel</button>
        <button className='bg-gray-400 text-white mx-2 px-2 hover:bg-gray-800' type='submit' > Edit</button>
        </div>
    </form>
    
    </>
  )
}
