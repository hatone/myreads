import React from 'react'
import * as BooksAPI from './components/BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({books})
    )
  }
  
  render() {
    return (
      <div className='app'>
        <Route exact path="/" render={() => (
        <ListBooks books={this.state.books} />
        )} />
        
        <Route path='/search' render={()=>(
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
