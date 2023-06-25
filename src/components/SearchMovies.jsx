import React, {useState} from "react"

function SearchMovies() {

    // State for query from form input
    const [query, setQuery] = useState("")

    //State for movie from API results
    const [movies, setMovies] = useState([])

    console.log(query)

    const searchMovies = async (e) => {
        e.preventDefault();
        
        // API url template literal with query value from the form input to search for
        const url = `https://api.themoviedb.org/3/search/movie?api_key=55b04a8aae7d1bd32759590dd1a295be&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()

            // Set movies array with results from API
            setMovies(data.results)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
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
                {movies.map(movie => (
                    <div className="card" key={movie.id}>
                        <img 
                            className="card--image" 
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                            alt={`${movie.title} poster`} 
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small><strong>Release Date:</strong> {movie.release_date}</small></p>
                            <p><small><strong>Rating:</strong> {movie.vote_average}</small></p>
                            <p className="card--description">{movie.overview}</p>
                        </div>
                        
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default SearchMovies