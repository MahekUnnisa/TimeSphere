import React from 'react'

const Article = (props) => {
  const item = props.item;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={item.urlToImage}
        alt={item.title}
        className="w-full h-auto"
      />
      <div className="p-4">
        <p>{item.author}</p>
        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <div className="px-4 pt-1 pb-2">
        <a target='_blank' rel='noreferrer' className="text-fuchsia-700 hover:text-slate-950" href={item.url}>Read more ...</a>
      </div>
    </div>
  )
}

export default Article