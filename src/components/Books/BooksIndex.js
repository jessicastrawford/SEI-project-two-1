import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../Common/Footer'
import BooksArray from './BooksArray'

function BooksIndex() {

  const sortedBooks = [...BooksArray]
  
  sortedBooks.sort(function(a,b) {
    var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
    if (titleA < titleB) {
      return -1
    } else if (titleA > titleB) {
      return 1
    } return 0
  }) 

  return (
    <section className="library-container">
      <h1>Choose your adventure!</h1>
      <div className="books-container">
        {sortedBooks.map(book => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <div className="book-card">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <img className="book-image" src={book.image} alt={book.title} max-height="220" width="150px"/>
                <p value={book.place}>{book.place}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  )
}

export default BooksIndex