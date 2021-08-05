import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar is-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to ="/" className="navbar-item">Home</Link>
          <Link to="/books" className="navbar-item">Library</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar