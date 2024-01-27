import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/ui/Button';
import { useAuthContext } from '../components/context/AuthContext';
import { addOrUpdateToCart, getReviews } from '../api/firebase'; 
import NewReview from '../components/NewReview';
import { useQuery } from '@tanstack/react-query';
import ReviewCard from '../components/ReviewCard';
import EditReview from '../components/EditReview';



export default function ProductDetail() {
  const {  uid } = useAuthContext(); 
  const {
    state: {
      product: {id, image, title, description, category, price, options},
    },
  } = useLocation(); 

  const [selected, setSelected] = useState(options && options[0])

  const [ newReview, setNewReview] = useState(false); 

  const { data: reviews} = useQuery({queryKey: ['reviews'], queryFn: () => getReviews(id)})
  
  const [edit, setEdit] = useState(false); 
  const [editText, setEditText] = useState(); 

  const handleEditText = (text) => {
    setEditText(text)
  }
  const handleEdit = (Boolean) => {
    setEdit(Boolean)
  }

  const handleReview = (Boolean) => {
      setNewReview(Boolean)
  }

  const handleSelect = (e) => {
      setSelected(e.target.value)
  }

  const handleClick = (e) => {
    const product = {id, image, title, price, option: selected, quantity: 1};
    addOrUpdateToCart(uid, product)
    
  }

  return (
    <>
      <p className='mx-12 mt-4 text-gray-700'>{category}</p>
      <section className='flex flex-col md:flex-row p-4'>
      <img className='w-1/2 px-4 basis-7/12' src={image} alt={title} />
      <div className='w-full basis-5/12 flex flex-col p-4'>
        <h2 className='text-3xl font-bold py-2'>{title}</h2>
        <p className='text-2xl font-bold py-2 border-b border-gray-400'>₩{price}</p>
        <p className='py-4 text-lg'>{description}</p>
        <div className='flex items-center'>
        <label className='text-brand font-bold' htmlFor='select'>options:</label>
        <select id='select' className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
            onChange={handleSelect} value={selected}>
          {options && options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        </div>
        <Button text="Add Order" onClick={handleClick}/>
      </div>
      </section>
      <section className='flex flex-col'>
        <h2 className='text-4xl font-bold m-4'>Customer Reviews</h2>
        <div>
          {!newReview &&  (
            <button className='rounded-sm bg-brand text-white font-bold mx-4 px-2 hover:scale-105 cursor-pointer' 
            onClick={() => handleReview(true)}>
              Write a review
              </button>
          ) }
          {edit && (
            <EditReview handleEdit={handleEdit} productId={id} editText={editText}/>
          )}
        </div>
        {newReview && (
          <NewReview productId={id} handleReview={handleReview} />
        )}
        <div className='m-4 border-top'>
          <ul className='border-t border-gray-300 mb-8 p-4 px-8'>
            {reviews && reviews.map((reviewItem) => (
              <ReviewCard 
                key={reviewItem.userId} 
                reviewItem={reviewItem} 
                productId={id}  
                handleEdit={handleEdit}
                handleEditText={handleEditText} 
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
