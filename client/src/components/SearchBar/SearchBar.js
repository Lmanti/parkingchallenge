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
            return fetch(`https://parkingsapi1.herokuapp.com/api/${input}/0`)
            .then(res => res.json())
            .then(json => setBusinesses(json))
        }
    }

    const next = () => {
        if (lastSearch) {
            setOffset(offset + changeValue)
            return fetch(`https://parkingsapi1.herokuapp.com/api/${lastSearch}/${offset + changeValue}`)
            .then(res => res.json())
            .then(json => setBusinesses(json))
        }
    }

    const back = () => {
        if (lastSearch) {
            if (offset > 0) {
                setOffset(offset - changeValue)
                return fetch(`https://parkingsapi1.herokuapp.com/api/${lastSearch}/${offset - changeValue}`)
                .then(res => res.json())
                .then(json => setBusinesses(json))
            }
        }
    }

    return (
        <div className={style.container} >
            {
                !businesses.businesses && !businesses.error && <h1>Find your Parking lot!</h1>
            }
            <form onSubmit={handleSubmit} className={businesses.businesses && businesses.businesses.length ? `${style.form} ${style.formChange}` : style.form} >
                <input type="text" onChange={handleInput} className={style.input} value={input} placeholder="Enter a location..." ></input>
                <button className={style.buttonSearch} >Search</button>
            </form>
            {
                businesses.businesses && businesses.businesses.length && <Parkings businesses={businesses.businesses} />
            }
            {
                businesses.businesses && businesses.businesses.length && <div className={style.buttonContainer} >
                <button onClick={back} disabled={offset === 0 ? true : false} >{"<"}</button>
                <button onClick={next} disabled={offset + changeValue >= businesses.total ? true : false} >{">"}</button>
            </div>
            }
            {
                businesses.error && <div className={style.error} >
                    Oops! You wrote a bad location!
                </div>
            }
            {
                businesses.businesses && !businesses.businesses.length && <div className={`${style.error} ${style.errorLong}`} >
                    Apparently this location has no parkings...
                </div>
            }
        </div>
    )
}

export default SearchBar