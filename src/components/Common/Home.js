import { useHistory } from 'react-router'

import Footer from './Footer'

function Home() {

  const history = useHistory()

  const handleClick = () => {
    history.push('/books')
  }
  
  return (
    <>
      <div className="hero">
        <div className="info-box">
          <h1>Bookcation</h1>
          <div className="quote">
            <h2>&quot;Books can take you places&quot;</h2>
            <p>Sandra Boynton</p>
            <button type="submit" className="button is-warning is-light" onClick={handleClick}>View Books Here</button>
          </div>
        </div>
        <div className="light-box"></div>
      </div>
      <Footer />
    </>
  )
}

export default Home