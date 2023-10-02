import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500">
            <nav className="container mx-auto py-4 px-4">
                <ul className="flex justify-between items-center text-white">
                    <li>
                        <a className="font-bold text-xl" href="/">TimeSphere</a>
                    </li>
                    <li>
                        <ul className="flex space-x-4">
                            <li className='text-xl hover:text-fuchsia-950 px-4 cursor-pointer'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='text-xl hover:text-fuchsia-950 px-4 cursor-pointer'>
                                <Link to="/news">News</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

    );
}
export default Navbar;
