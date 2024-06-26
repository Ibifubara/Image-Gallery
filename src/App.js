import React, {useState, useEffect} from 'react';
import ImageCard from './components/imageCard';
import SearchImage from './components/searchImage';


function App() {
const [images, setImages] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [term, setTerm] = useState('')

// const url = (`https://api.pexels.com/v1/search?q=${term}&orientation=vertical`)

useEffect(() => {
  // fetch(url, {
  //   headers: {
  //     Authorization : process.env.REACT_APP_PEXELS_API_KEY,
  //   },
  // })
  
  fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photos&pretty=true&orientation=horizontal`)
  .then( res => res.json())
  .then( data => {
    setImages(data.hits)
    setIsLoading(false)
  })
  .catch( err => console.log(err))
}, [term])

  return (
    
    <div className="container mx-auto">
      <SearchImage searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0  && <h1 className='text-6xl text-center text-white py-4 px-6 bg-fuchsia-500 mx-auto mt-32 rounded-lg'>No Images Found</h1>}

      {isLoading ? <h1 className='text-6xl text-center text-white py-4 px-6 bg-fuchsia-500 mx-auto mt-32 rounded-lg'>Processing...</h1> : <div className="md:grid grid-cols-4 gap-4">
        {images.map( image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;
