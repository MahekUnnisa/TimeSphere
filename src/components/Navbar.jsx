import React, { useEffect, useState } from 'react';
import '../index.css';
import getData from '../utils/data';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [links, setLinks] = useState(null)
    useEffect(() => {
        const data = getData();
        setLinks(data);
    }, [])

    return (
        <div className="bg-gray-200">
            <nav className="container mx-auto py-4 px-4">
                <ul className="flex justify-between items-center text-black">
                    <li>
                        <a className="font-bold text-base me-4" href="/">TimeSphere</a>
                        {links ? (
                            links.map((item) => (
                                <Link className="hover:text-fuchsia-700 active:text-fuchsia-800 mx-6 text-sm" key={item} to={`/news/${item}`}>
                                    {item}
                                </Link>
                            ))
                        ) : (
                            <></>
                        )}
                    </li>
                    <li>
                        <ul className="flex space-x-4">
                            <li className='text-sm hover:text-fuchsia-700 px-4 cursor-pointer'>
                                <Link className='active:text-fuchsia-800' to="/">Home</Link>
                            </li>
                            <li className='text-sm hover:text-fuchsia-700 px-4 cursor-pointer'>
                                <Link className='active:text-fuchsia-800' to="/news">News</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;
