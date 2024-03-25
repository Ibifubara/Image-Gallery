import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchImage = ({ searchText}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        searchText(text)
    }

  return (
    <div className="rounded overflow-hidden my-10 mx-auto flex justify-between items-center">
      <div className="text-4xl text-fuchsia-900 py-5 font-bold">
        Image Gallery
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex items-center border-b-2 border-fuchsia-900 py-2">
          <input onChange={e => setText(e.target.value)} className="placeholder:italic placeholder:text-slate-400 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
          <button className="flex-shrink-0 bg-fuchsia-900 hover:bg-fuchsia-900 border-fuchsia-900 hover:border-fuchsia-900 text-sm border-4 text-white py-1 px-2 rounded" type='submit'>
            <FaSearch className='text-gray-600' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchImage
