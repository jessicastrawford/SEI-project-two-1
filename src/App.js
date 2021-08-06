import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import Navbar from './components/Common/Navbar'
import Home from './components/Common/Home'
import BookShow from './components/Books/BookShow'
import BooksIndex from './components/Books/BooksIndex'


function App() {
  return (
    <body>
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
    </body>
  )
}

export default App
