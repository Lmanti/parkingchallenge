import React, { useState } from "react"
import Parkings from "../Parkings/Parkings"
import style from './SearchBar.module.css'

const SearchBar = () => {
    const [businesses, setBusinesses] = useState([])
    const [input, setInput] = useState("")
    const [offset, setOffset] = useState(0)
    const [lastSearch, setLastSearch] = useState("")
    const changeValue = 50

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input) {
            setLastSearch(input)
            setInput("")
            return fetch(`http://localhost:3001/api/${input}/0`)
            .then(res => res.json())
            .then(json => setBusinesses(json))
        }
    }

    const next = () => {
        if (lastSearch) {
            setOffset(offset + changeValue)
            return fetch(`http://localhost:3001/api/${lastSearch}/${offset + changeValue}`)
            .then(res => res.json())
            .then(json => setBusinesses(json))
        }
    }

    const back = () => {
        if (lastSearch) {
            if (offset > 0) {
                setOffset(offset - changeValue)
                return fetch(`http://localhost:3001/api/${lastSearch}/${offset - changeValue}`)
                .then(res => res.json())
                .then(json => setBusinesses(json))
            }
        }
    }

    console.log(input)
    // console.log(offset)
    // console.log(businesses)
    // console.log(lastSearch)

    return (
        <div className={style.container} >
            <form onSubmit={handleSubmit} className={businesses.businesses ? `${style.form} ${style.formChange}` : style.form} >
                <input type="text" onChange={handleInput} className={style.input} value={input} placeholder="Enter a location..." ></input>
                <button className={style.buttonSearch} >Search</button>
            </form>
            <Parkings businesses={businesses.businesses} />
            {
                businesses.businesses && <div className={style.buttonContainer} >
                <button onClick={back} disabled={offset === 0 ? true : false} >{"<"}</button>
                <button onClick={next} disabled={offset + changeValue >= businesses.total ? true : false} >{">"}</button>
            </div>
            }
            {
                businesses.error && <div className={style.error} >
                    Oops! You wrote a bad location!
                </div>
            }
        </div>
    )
}

export default SearchBar