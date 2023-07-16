import { Component } from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component{
    
    render(){
        // const {title, plot, price, rating, stars, fav, cart}=this.state;
        const {movies, addStars, decStars, toggleFav, toggleCart}=this.props;
        return(
            <>            
            {/* <MovieCard title={title} plot={plot} price={price} rating={rating} stars={stars} fav={fav} cart={cart}/> */}
            {movies.map((movie)=><MovieCard movies={movie} 
                                            addStars={addStars} 
                                            decStars={decStars}
                                            toggleFav={toggleFav}
                                            toggleCart={toggleCart}
                                            key={movie.id}
                                            />)}
            {/* <MovieCard movies={this.state} /> */}
            </>
        )
    }
}

export default MovieList;