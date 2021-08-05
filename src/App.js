import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import BookShow from './components/BookShow'
import BooksIndex from './components/BooksIndex'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/books/:currentBookId">
          <BookShow />
        </Route>
        <Route path="/books">
          <BooksIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
