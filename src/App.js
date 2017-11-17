import React from 'react'
import * as BooksAPI from './components/BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import Search from './components/Search'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({books})
    )
  }
  
  updateMoveShelf= (shelf, book) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books =>
        this.setState({books})
      )
    })
  }
  
  
  render() {
    return (
      <div className='app'>
        <Route exact path="/" render={() => (
         <ListBooks books={this.state.books} updateMoveShelf={this.updateMoveShelf} />
        )} />
        
        <Route path='/search' render={()=>(
         <Search books={this.state.books} updateMoveShelf={this.updateMoveShelf} />  
        )}/>
      </div>
    )
  }
}

export default BooksApp
