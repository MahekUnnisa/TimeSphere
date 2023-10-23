import React from 'react'

const TopHeadline = (props) => {
    const item = props.topHeadline
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4 flex">
            <img
                src={item.image}
                alt="Top Article"
                className="w-1/4 h-auto"
            />
            <div className="flex-grow p-4">
                <h2 className="text-base font-semibold mb-2">{item.title}</h2>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-fuchsia-700 hover:text-slate-950 text-xs"
                    href={item.url}
                >
                    Read more ...
                </a>
            </div>
        </div>
    );
}

export default TopHeadline