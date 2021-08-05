import React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import BooksArray from './BooksArray'



function BooksIndex() {
  

  // const handleClick = (e) => {
  //   console.log(e.target.value)
  // }
  // const [book, setBook] = React.useState(null)

  const handleClick = (e) => {
    console.log(e.target)
    // setBook(e.target)
    // console.log('this is what user clicked', e.target.innerText)
    // console.log('this is the book const', book)
  }

  return (
    <section className="library-container">
      <h1>Library</h1>
      {/* <Link to={`/books/${book.place}`}> */}
      <div className="books-container">
        {BooksArray.map(book => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <div className="book-card" onClick={handleClick}>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p value={book.place}>{book.place}</p>
                <img className="book-image" src={book.image} alt={book.title} />
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* </Link> */}
    </section>
    
  )
}

export default BooksIndex