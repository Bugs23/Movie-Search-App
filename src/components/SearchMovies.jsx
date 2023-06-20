import React from "react"

function SearchMovies() {
    return (
        <div>
            <form className="form">
                <label className="label" htmlFor="query">Search Movies</label>
                <input className="input" type="text" name="query" placeholder="i.e. Scarface" />
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchMovies