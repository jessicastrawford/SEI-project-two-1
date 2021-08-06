import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import BooksArray from './BooksArray'
import Error from '../Common/Error'
import Loading from '../Common/Loading'
import Footer from '../Common/Footer'
import getIcon from '../../lib/getIcon'

function BookShow() {
  
  const { currentBookId }  = useParams()
  const [city, setCity] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !city && !isError
  const [book] = React.useState(() => {
    return BooksArray.find(book => {
      return book.id === Number(currentBookId)
    })
  })
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://goweather.herokuapp.com/weather/${book.place}`)
        setCity(res.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [book.place])

  return (
    <div className="book-show-container">
      {isError && <Error/>}
      {isLoading && <Loading />}
      {city && 
        <div className="city-container">
          <div className="title-wrapper">
            <h1 className="title has-text-centered"> {book.title} </h1>
            <p className="has-text-centered">By {book.author}</p>
          </div>
          <hr />
          <div className="image-and-info-wrapper">
            <div className="image-wrapper">
              <img src={book.image} alt={book.title}/> 
            </div>
            <div className="city-info-wrapper">
              <div className="travel-to-city">
                <h2 className="has-text-centered">Travel to...</h2>
                <h2 className="has-text-centered">{book.place}.</h2>
              </div>
              <hr />
              <div className="city-weather">
                <p className="has-text-centered">The weather today:</p>
                <p className="has-text-centered">{city.temperature}</p>
                <p className="has-text-centered">{city.description}{getIcon(city)}</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      }
      <Footer />
    </div> 
  )
}

export default BookShow 