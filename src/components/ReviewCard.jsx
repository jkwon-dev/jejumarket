import React from 'react'
import { useAuthContext } from './context/AuthContext'
import { removeFromReview } from '../api/firebase';


export default function ReviewCard(
    {reviewItem : { image, name, review , userId}, 
      productId, 
      handleEdit,
      handleEditText}
  ) {
  const { uid } = useAuthContext(); 
  
  const handleDelete =()=> removeFromReview(productId, userId);

  const handleEditButton = () => {
    handleEditText(review)
    handleEdit(true)
  }
  

  return (
    <li >
        <div className='flex flex-col'>
        <div className='flex items-center shrink-0'>
        <img className='w-10 h-10 rounded-full mr-2'
            src={image} 
            alt={name} 
        />
        <span className='text-gray-600 text-1xl'>{name}</span>
      </div>
        <div className='flex items-center'>
          <p className='text-2xl mx-8'>{review}</p>
           {uid === userId && (
             <div>
             <button className='bg-gray-400 text-white mx-2 px-2 hover:bg-gray-800' onClick={handleEditButton}>Edit</button>
             <button className='bg-gray-400 text-white mx-2 px-2 hover:bg-gray-800' onClick={handleDelete}>
                      Delete
              </button>
            </div>
           )}
        </div>
        </div>
    </li>
  )
}
