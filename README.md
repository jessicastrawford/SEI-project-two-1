# SEI Project Two, Bookcation.

# Table of contents

* Project Overview
* Brief 
* Technologies & Frameworks Used
* Approach Taken
* Wins
* Challenges 
* Key Learnings
* Future Content 

# Project Overview

The app has been deployed with Netlify and is available [here.](https://bookcation-app.netlify.app/)

<img width="1336" alt="Screenshot 2021-10-08 at 12 40 48" src="https://user-images.githubusercontent.com/83759837/136550700-db052ab9-140d-417d-a8d5-e22a4ae2f058.png">

Our idea behind Bookcation was to help users find the perfect location and reading spot for their chosen book. The users were able to select the book of their choice and be taken to a show page that displayed more information about where the book was based and the weather at that current time.

# Brief

* Build a React.js App that includes a public API and uses RESTful routes.
* Pair coding project to be completed in a 48 hour timeframe.
* The App needed to include several components with at least one functional and a router. 

# Technologies & Frameworks used

* HTM5
* CSS3 & SASS
* JavaScript
* Bulma CSS Framework
* Axios
* React-router-dom
* React loader spinner
* Coolors (to find a colour scheme)
* Google Fonts
* Firefox Dev Tools
* VS Code with Eslint & VS Code LiveShare
* Git and GitHub

# Approach Taken

* We planned out what we wanted to achieve within the 48 hours and got coding pretty quickly. We started off our planning phase by researching API’s linked to our idea including library books, and weather API’s. During this process we found inspirational ideas for stretch goals, one of which included adding in weather icons into the show pages. 

* Then we created a books index page which would display clickable cards that would take the user to an individual show page. We achieved this by importing the books array and then mapping through the array within the JSX.

```javascript
  return (
    <section className="library-container">
      <h1>Choose your adventure!</h1>
      <div className="books-container">
        {sortedBooks.map(book => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <div className="book-card">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <img className="book-image" src={book.image} alt={book.title} max-height="220" width="150px"/>
                <p value={book.place}>{book.place}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  )
  ```
  
  * We then created a books show page which would display more information about the book including the current weather for the books location, this was where we integrated the API, and received the data with an axios call. 

```javascript
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://goweather.herokuapp.com/weather/${book.place}`)
        setCity(res.data)
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }
    getData()
  }, [book.place])
```

* We were able to find the book the user had clicked on, using params and the find method, setting the results into state. 

```javascript
 const [book] = React.useState(() => {
   return BooksArray.find(book => {
     return book.id === Number(currentBookId)
   })
 })
```
* An added stretch goal that we managed to complete was to add a if statement to display the icon for the weather. If we had more time I would have liked to have made these into animations.

```javascript
function getIcon(city) {
  if (city.description === 'Partly cloudy') {
    return <span> 🌤</span>
  } else if (city.description === 'Cloudy') {
    return <span> ☁️</span>
  } else if (city.description === 'Rain') {
    return <span> 🌧</span>
  } else if (city.description === 'Sunny') {
    return <span> ☀️</span>
  } else if (city.description === 'Clear') {
    return <span> ☀️</span>
  } else if (city.description === 'Light rain shower') {
    return <span> 🌧</span>
  } else if (city.description === 'Patchy rain possible') {
    return <span> 🌧</span>
  } else if (city.description === 'Snow') {
    return <span> ❄️</span>
  }  else {
    return <span></span>
  }
}

export default getIcon
```

# Wins 

The biggest win was how much we managed to learn and achieve in such a short time frame. We worked really well pair coding in VS Code LiveShare, sharing our different ideas and methods, bouncing off one another. It was really exciting to see how axios can get data and display data on a page so quickly and efficiently.

# Challenges

* Our biggest challenge for this project was using the weather API, goweather. Our API was: `https://goweather.herokuapp.com/weather/${book.place}`

* When creating our books array we made sure to double check if the book place would exist in this API and after thorough checking it all matched up. However it was almost as if the API kept changing and different cities/ countries would stop working. For example the following API for Paris works with this address: [https://goweather.herokuapp.com/weather/paris] displaying the following results:

<img width="325" alt="Screenshot 2021-10-08 at 12 48 27" src="https://user-images.githubusercontent.com/83759837/136551705-e930a41d-06f8-4500-9b33-31c936e74246.png">

*  However, if I was to put in London into the API (which once worked) it now returns a “NOT_FOUND” error:

<img width="322" alt="Screenshot 2021-10-08 at 12 48 59" src="https://user-images.githubusercontent.com/83759837/136551754-de66be95-5011-408d-a02c-05f98719f315.png">

* This was an issue for us as we kept noticing that a few of the books stopped working on their show pages.

* We chose this API as it worked well for finding the exact cities of our choice, but we soon discovered that we perhaps should have used a different API.

* If I was to do this project again I think we should have spent more time planning and experimenting with API’s to make sure we have the right one.

# Key Learnings 

* The project was really exciting and I enjoyed how fast paced it was. It was a great way to think quickly and efficiently about what we needed to do and how to achieve it, meeting the deadline on time. I really enjoyed getting familiar with APIs and their documentation, as we experimented with multiple different weather and library APIs during our planning stages. This project enabled me to become confident building a React App using RESTful resources to fetch and map through data.

# Future Content: What would I like to add if I had more time

* If we had more time I would have liked to expand our show pages with more information about the book and user interaction with a similar books section. I think it would have also been great to have added a search bar on the index page for the user to search for their chosen book.

