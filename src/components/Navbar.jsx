import React from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({searchTerm, setSearchTerm}) => {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500">
            <nav className="container mx-auto py-4 px-4">
                <ul className="flex justify-between items-center text-white">
                    <li>
                        <a className="font-bold text-xl" href="/">TimeSphere</a>
                    </li>
                    <li>
                        <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
                            <IoMdSearch fontSize={21} className="ml-1" />
                            <input
                                type="text"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search"
                                value={searchTerm}
                                keydown={() => navigate('/search')}
                                className="p-2 w-full bg-white outline-none"
                            />
                        </div>
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
