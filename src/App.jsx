import React, {useState, useEffect} from 'react'
import Countries from './components/Countries'
import Search from './components/Search'
import './assets/app.css'

const url = "https://restcountries.com/v3.1/all"
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [countries, setCountries] = useState([])

  const fetchData = async (url) =>{
    setIsLoading(true)
    try{
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      setIsLoading(false)
      setError(null)
    }
    catch(e){
      setIsLoading(false)
      setError(e)
    }
  }
  useEffect(()=>{
    fetchData(url)
  }, [url])

  const removeConunter = (name) =>{
    setCountries(countries.filter((country)=>country.name.common != name))
  }

  const searchHandler = (data) =>{
    let value = data.toLowerCase()
    const resultCountries = countries.filter((country)=>{
      return country.name.common.toLowerCase().startsWith(value)
    })
    setCountries(resultCountries)
  }

  return (
    <div>
      <h1>Country App</h1>
      <Search onSearch={searchHandler}/>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {countries && <Countries countries={countries} onRemove={removeConunter}/>}
    </div>
  )
}

export default App
