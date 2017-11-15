import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  
  state = {
    query: '',
    filteredBooks: []
  }
  
  updateQuery = (query) => {
    if (!query) {
      this.setState(
        {query: '', filteredBooks: []})
    } else {
      this.setState({query: query.trim()})
      BooksAPI.search(query,10).then((books) => {
        this.setState({filteredBooks: books})
      })
    }
  }
  
  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(e) => this.updateQuery(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.filteredBooks.map(book =>
            <li key={book.id}>
              <Book book={book} />
            </li>
          )} 
            </ol>
        </div>
      </div>
    )
  }
}

export default Search