import React, { useState } from "react"
import Parkings from "../Parkings/Parkings"

const SearchBar = () => {
    const [businesses, setBusinesses] = useState([])
    const [input, setInput] = useState("")
    const [lastSearch, setLastSearch] = useState("")

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input) {
            setLastSearch(input)
            return fetch(`http://localhost:3001/api/${input}/0`)
            .then(res => res.json())
            .then(json => setBusinesses(json))
        }
    }

    // console.log(businesses)
    // console.log(lastSearch)

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={handleInput} ></input>
                <button>Search</button>
            </form>
            <Parkings businesses={businesses.businesses} />
        </div>
    )
}

export default SearchBar