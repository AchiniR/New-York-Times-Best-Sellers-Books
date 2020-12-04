import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BooksGrid from './components/books/BooksGrid';
import AppNavbar from './components/layouts/AppNavbar';
import BookList from './components/books/BookList';
import Book from './components/books/Book';

const App = () =>{
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchItems = async () =>{
      setIsLoading(true)
      const result = await Axios(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=96dQHhBzowRUG9npiwoF70SvpczqKcNx`)
    
      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])
   
  return (
    <div>
      <Router>
        <AppNavbar/>
        <Route exact path="/booklist/:id">
          <BookList  isLoading={isLoading} items={items.results}/>
        </Route>
        <Route  exact path="/">
        <h2>NYT Best Seller Book Types</h2>
          <div className="container">
            <BooksGrid isLoading={isLoading} items={items.results}/>
          </div>
        </Route>
        <Route exact path="/book/:isbn">
          <Book isLoading={isLoading} items={items.results}/>
        </Route>
        
      </Router>
    </div>
    
  );
}

export default App;
