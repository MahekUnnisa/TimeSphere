import React from 'react'

const FeaturedArticle = (props) => {
    const item = props.featured
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <img
                src={item.urlToImage}
                alt="Featured Article"
                className="w-full h-auto"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.author}</p>
            </div>
            <div className="px-4 pt-1 pb-2">
                <p className="text-gray-600">{item.description}</p>
                <a target='_blank' rel='noreferrer' className="text-fuchsia-700 hover:text-slate-950" href={item.url}>Read more ...</a>
            </div>
        </div>
    )
}

export default FeaturedArticle