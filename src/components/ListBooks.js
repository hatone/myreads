import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const ListBooks = (props) => {
  const { books, updateMoveShelf } = props
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf title='Currently Reading' books={books.filter(book=>book.shelf === 'currentlyReading')} updateMoveShelf={updateMoveShelf} />
        <BookShelf title='Want to Read' books={books.filter(book=>book.shelf === 'wantToRead')} updateMoveShelf={updateMoveShelf} />
        <BookShelf title='Read' books={books.filter(book=>book.shelf === 'read')} updateMoveShelf={updateMoveShelf} />
      </div>
      <div className="open-search">
        <Link to="/search">
          Add a book
        </Link>
      </div>
    </div>
  )
}

export default ListBooks
