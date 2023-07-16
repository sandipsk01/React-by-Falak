import React from "react";
function MovieCard(props){
        {/*destructuring:   const {title}=this.state*/}
        const {movies: data}=props;
        const {movies, addStars, decStars, toggleFav, toggleCart}=props;
        // const {title, plot, price, rating, stars, fav, cart}=this.props.movies;
        const {title, plot, price, poster, rating, star, fav, cart}=data;
        
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                    <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={()=>{decStars(movies)}}/>
                                    
                                    <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>

                                    <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" onClick={()=>{addStars(movies)}}/>

                                    <span>{star}</span>
                            </div>
                            {/* {fav?<button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{toggleFav(movies)}}>
                                {fav?"Un-favourite":"Favourite"}
                            </button>

                            <button className={cart?"unfavourite-btn":"cart-btn"} onClick={()=>{toggleCart(movies)}}>{cart?"Remove from Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default MovieCard;