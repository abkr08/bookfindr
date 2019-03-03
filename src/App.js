import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book';

class App extends Component {
  state = {
    loading: false,
    books: []
  }
  inputChangedHandler = e => {
    const { value } = e.target;
    this.setState({books: []});
    if (value !== ''){
      this.setState({loading: true});
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
      .then(res => {
        this.setState({loading: false})
        res.json().then(data => {
          console.log(data);
          let books = data.items.map(book => {
            let obj = {};
            obj.id = book.id;
            obj.link = book.volumeInfo.infoLink;
            obj.images = book.volumeInfo.imageLinks;
            obj.authors = book.volumeInfo.authors;
            obj.title = book.volumeInfo.title;
            obj.ratings = book.volumeInfo.averageRating;
            obj.language = book.volumeInfo.language;
            return obj;
          })
          this.setState({books});
        });
      });
    } else {
      //
    }
  }
  render() {
    console.log(this.state.books)
    let spinner = null;
    if (this.state.loading){
      spinner = <div className="loading"></div>;
    }
    let elements = null;
    if (this.state.books.length > 0) {
      elements = this.state.books.map(book => {
        return <Book key={book.id} bookImage={book.images && book.images.thumbnail}
                  bookTitle={book.title} ratings={book.ratings}
                  link={book.link}
                  author={book.authors} />
      })
    }
    return (
      <div className="App">
        <h1>BOOKFINDR</h1>
        <form>
          <input type='text' placeholder='Search book... ' onChange={this.inputChangedHandler}/>
        </form>
        {spinner}
        <div className='Books'>
        {elements}
        </div>
      </div>
    );
  }
}

export default App;
