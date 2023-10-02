import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-200 p-4">
      <ul className='px-6 py-4'>
        <li className='py-1 text-left text-gray-900 font-medium text-xl'>
          <Link className="hover:text-fuchsia-700" to="/news/business">Business</Link>
        </li>
        <li className='py-1 text-left text-gray-900 font-medium text-xl'>
          <Link className="hover:text-fuchsia-700" to="/news/technology">Technology</Link>
        </li>
        <li className='py-1 text-left text-gray-900 font-medium text-xl'>
          <Link className="hover:text-fuchsia-700" to="/news/beauty">Beauty</Link>
        </li>
        <li className='py-1 text-left text-gray-900 font-medium text-xl'>
          <Link className="hover:text-fuchsia-700" to="/news/fashion">Fashion</Link>
        </li>
        <li className='py-1 text-left text-gray-900 font-medium text-xl'>
          <Link className="hover:text-fuchsia-700" to="/news/politics">Politics</Link>
        </li>
      </ul> 
    </div>
  )
}

export default Sidebar