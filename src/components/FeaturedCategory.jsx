import React from 'react'

const FeaturedCategory = (props) => {
    const item = props.articleItem
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4 flex">
            <img
                src={item.urlToImage}
                alt="Featured Article"
                className="w-1/3 h-auto"
            />
            <div className="flex-grow p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.author}</p>
                <p className="text-gray-600">{item.description}</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-fuchsia-700 hover:text-slate-950"
                    href={item.url}
                >
                    Read more ...
                </a>
            </div>
        </div>
    );
}

export default FeaturedCategory