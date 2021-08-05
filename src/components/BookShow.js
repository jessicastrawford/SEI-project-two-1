import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import BooksArray from './BooksArray'

function BookShow() {
  
  const { currentBookId }  = useParams()
  const [city, setCity] = React.useState(null)
  const [book, setBook] = React.useState(() => {
    return BooksArray.find(book => {
      return book.id === Number(currentBookId)
    })
  })

  console.log(BooksArray)
  console.log(book)
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://goweather.herokuapp.com/weather/${book.place}`)
        setCity(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [book.place])

  console.log(city?.temperature)

  return (
    <>
      {city && 
      <div className="city-container">
        <h1>{book.place}</h1>
        <h1> {book.title} </h1>
        <p>{book.author}</p>
        <img src={book.image} alt={book.title}/> 
        <p>{city.temperature}</p>
        <p>{city.description}</p>
      </div>
      
      
      }
      
    </>
  )
}

export default BookShow 