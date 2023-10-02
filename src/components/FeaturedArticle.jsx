import React from 'react'

const FeaturedArticle = (props) => {
    const featured = props.featured
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <img
                src={featured.urlToImage}
                alt="Featured Article"
                className="w-full h-auto"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{featured.title}</h2>
                <p className="text-gray-600">{featured.author}</p>
            </div>
        </div>
    )
}

export default FeaturedArticle