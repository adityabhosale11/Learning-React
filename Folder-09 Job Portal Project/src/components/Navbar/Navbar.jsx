import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-10 py-5 max-w-7xl mx-auto">
        <div className='text-3xl font-bold text-indigo-600'>
            <h5>Jobify</h5>
        </div>
        <div className='flex gap-8 items-center'>
            <p className='cursor-pointer font-medium hover:text-indigo-600 transition duration-300'>Home</p>
            <p className='cursor-pointer font-medium hover:text-indigo-600 transition duration-300'>Jobs</p>
            <p className='cursor-pointer font-medium hover:text-indigo-600 transition duration-300'>About</p>
            <p className='cursor-pointer font-medium hover:text-indigo-600 transition duration-300'>Contact</p>
        </div>

        <div className='bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition'>
            <button>Login</button>
        </div>
      
    </div>
  )
}

export default Navbar
