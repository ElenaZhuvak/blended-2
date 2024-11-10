import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';


export const Photos = () => {
const [query, setQuery] = useState('')

const [isLoading, setIsLoading] = useState(false)
const [error, setError]= useState(null)
const [images, setImages] = useState([])


const [page, setPage] = useState(1);
useEffect(()=> {
  if (!query) {
    return
  }
  const fetchImages = async () => {
  setIsLoading(true)

  try {
    const data = await getPhotos(query, page)
    console.log(data);
    
  } catch (error) {
    setError(error)
  }
  finally {
    setIsLoading(false)
  }


  }
  fetchImages()
}, [query, page])

  const handleSubmit = (value) => {
    setQuery(value);
  }

  return (
    <>
    < Form onSubmit={handleSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
