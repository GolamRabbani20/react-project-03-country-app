import './../assets/country.css'
const Country = (props) =>{
    console.log(props)
    const {name, flags, capital, population, area} = props.country
    const removeCountryHandler = (country_name) =>{
        props.onRemove(country_name)
    }
    return(
        <article className='country'>
            <div>
                <img className='flag' src={flags.png} alt={name.common}/>
                <h3>Name: {name.common}</h3>
                <h3>Population: {population}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Area: {area}</h3>
                <button onClick={()=>removeCountryHandler(name.common)} className='btn'>Remove Country</button>
            </div>
            
        </article>
    )
}
export default Country