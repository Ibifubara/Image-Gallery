import React from 'react'

const imageCard = ({image}) => {
  const imageTag = image.tags.split(',');

  return (
    <div className='max-w-sm bg-lightGrey rounded overflow-hidden shadow-lg font-body'>
        <img src={image.webformatURL} alt="" className='w-full'/>
        <div className="px-6 py-6">
          <div className="font-bold text-imgDescColor text-xl mb-2">
            Photo by: {image.user}
          </div>
          <ul className='text-gray-700'>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
          </ul>
        </div>
        <div className="px-6 py-4">
        {imageTag.map((tag, index) => (
          <span key={index} className="inline-block bg-fuchsia-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
          #{tag}
        </span>
        ))}
      </div>
      </div>
  )
}

export default imageCard
