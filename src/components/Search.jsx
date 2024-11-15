import { useEffect, useState } from "react"

const Search = (props) =>{
    const [searchCountry, setSearchCountry] = useState("")
    const inputHandle = (event) =>{
        setSearchCountry(event.target.value)
    }

    useEffect(()=>{
        props.onSearch(searchCountry)
    }, [searchCountry])

    return(
        <div style={{textAlign:"center"}}>
            <input type="text" placeholder="Search country" onChange={inputHandle} value={searchCountry}/>
        </div>
    )
}
export default Search