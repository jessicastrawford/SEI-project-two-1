import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-start is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <NavLink to ="/" exact className="navbar-item">Home</NavLink>
          <NavLink to="/books" className="navbar-item">Library</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar