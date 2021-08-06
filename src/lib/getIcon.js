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