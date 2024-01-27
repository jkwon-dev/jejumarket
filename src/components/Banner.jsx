import React from 'react'

export default function Banner() {
  return (
    <section className='h-96 bg-yellow-900 relative'>
        <div className='w-full h-full bg-cover bg-banner opacity-80'>
        </div>
        <div className='absolute w-full top-28 text-center text-gray-50 drop-shadow-2xl'>
            <h2 className='text-6xl'>Jeju Market</h2>
            <p className='text-2xl'>Organic products, High Quality</p>
        </div>
    </section>
  )
}
