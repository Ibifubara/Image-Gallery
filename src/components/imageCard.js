import React from 'react'

const imageCard = ({image}) => {
  return (
    <div className='max-w-sm bg-lightGrey rounded overflow-hidden shadow-lg font-body'>
        <img src={image.src.original} alt="" className='w-full'/>
        <div className="px-6 py-6">
          <div className="font-bold text-imgDescColor text-xl mb-2">
            Photo by: {image.photographer}
          </div>
          <ul className='text-gray-700'>
            <li>
              <strong>Photo Description: </strong> {image.alt}
            </li>
          </ul>
        </div>
      </div>
  )
}

export default imageCard
