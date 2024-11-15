import { v4 as uuidv4 } from 'uuid';
import Country from './Country'
import style from './../assets/countries.module.css'

const Countries = (props) =>{
    const removeCountry = (country) =>{
        props.onRemove(country)  
    }
    return(
        <section className={style.countries}>
            {props.countries.map((country)=>{
                const countryNew = {country, id: uuidv4()}
                return <Country {...countryNew} key={countryNew.id} onRemove={removeCountry}/>
            })}
        </section>
    )
}
export default Countries