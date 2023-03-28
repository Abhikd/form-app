import React from 'react'

const Cards = ({ list, handleEdit }) => {
    return (
        <div>
            <div className='h-[350px] w-[300px] shadow-md border border-gray-400 flex flex-col justify-evenly items-start px-2 mt-20 mx-auto rounded-md'>
                <div className='flex space-x-1'><p className='font-semibold'>E-mail:</p><p>{list.mail}</p> </div>
                <div className='flex space-x-1'>  <p className='font-semibold'>Age:</p><p> {list.age}</p> </div>
                <div className='flex space-x-1'><p className='font-semibold'>Name:</p><p> {list.name}</p></div>
                <div className='flex space-x-1'><p className='font-semibold'>Phone Number:</p><p>{list.phone}</p></div>
                <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => handleEdit(list.key)}>Edit</button>

            </div>
        </div>
    )
}

export default Cards