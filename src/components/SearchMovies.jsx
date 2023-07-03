import React, {useState} from "react"
import MovieCard from "./MovieCard"

function SearchMovies() {

    // State for the movie you typed into the input field
    const [query, setQuery] = useState("")

    // State for movies from API results
    const [movies, setMovies] = useState([])

    // Search for the movie
    async function getMovies(e) {
        e.preventDefault();
        
        // API url template literal with query value from the form input to search for
        const url = `https://api.themoviedb.org/3/search/movie?api_key=55b04a8aae7d1bd32759590dd1a295be&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()

            // Set movies array with results from API call
            setMovies(data.results)
        } catch (err) {
            console.error(err)
        }
    }

    // Create movie cards for each movie in results
    const cards = movies.map((movie) => {
        return (
            <MovieCard 
                key={movie.id}
                {...movie}
            />
        )
    })

    return (
        <div>
            <form className="form" onSubmit={getMovies}>
                <label className="label" htmlFor="query">Search Movies</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query" 
                    placeholder="i.e. Scarface" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {cards}
            </div>    
        </div>
    )
}

export default SearchMovies