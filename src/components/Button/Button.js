import React from 'react';

const Button = ({firstName, lastName}) => {
   return (
    <div>
    <button className='bg-red-400 hover:bg-red-500 text-white px-5 py-3 rounded-full'>{firstName} {lastName}</button>
  </div>
   )
}

export default Button;