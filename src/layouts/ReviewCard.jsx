import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'

const ReviewCard = (props) => {
  return (
    <div className='flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5'>
        <div className='flex flex-row items-center lg:justify-start justify-center'>
            <div className='w-1/4'>
                <img className='rounded-full' src={props.img} alt="img" />
            </div>
            <div className='mx-3'>
                <h2 className='font-semibold text-lg'>{props.title}</h2>
                <div className='flex'>
                    <BsStarFill className='text-brightColor' />
                    <BsStarFill className='text-brightColor' />
                    <BsStarFill className='text-brightColor' />
                    <BsStarFill className='text-brightColor' />
                    <BsStarHalf className='text-brightColor' />
                </div>
            </div>
            <span className='ml-16'>
                <FaQuoteRight className='text-backgroundColor' size={42} />
            </span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste numquam, aliquam error consequuntur nesciunt sit quia quis quos ratione laborum mollitia voluptatem tempora non vitae esse corporis quas ea!
        </p>
    </div>
  )
}

export default ReviewCard
