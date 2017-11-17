import React, { Component } from 'react'

const Book = (props) => {
  const { book, updateMoveShelf } = props
  const { imageLinks, title, authors } = book
  const { thumbnail } = imageLinks
  
  const bookCoverStyle = {
    width: 128,
    height: 193,
    backgroundImage: `url("${thumbnail}")`
  }
  
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={bookCoverStyle}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => updateMoveShelf(event.target.value, book)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors ? authors.join(','):''}</div>
    </div>
  )
}

export default Book