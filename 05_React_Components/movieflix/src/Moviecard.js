import React from "react";

class MovieCard extends React.Component{
    constructor(){
        {/*If you are inhering a class then you must use a super constructor. i.e. first need to call constructor of inherited class/super*/}
        super();
        {/*State is built in object. It should be in class inside constuctor*/}
        this.state={
            title:"The Avengers",
            plot:"Super-natural powers shown in the movie",
            price: 199,
            rating: 8.9,
            stars:0,
            fav: false,
            cart: false
        }
        //this.addStars=this.addStars.bind(this);
        
    }
    
    addStars(){
        {/*We are inside class so "function" keyword not needed*/}
        if(this.state.stars>=5){
            return;
        }
        //set state = to update the state and re-render. It is asynchronus but in react 16 and prev react version setState was synchronus in promises and ajax calls.

        // Batching: No matter how many setState func try to call only the last will get called in the "first" form. Not same for 2nd. But rendering happens once in both forms.
        //form 1:
        this.setState({
            stars:this.state.stars + 0.5
        },()=>console.log("stars inside th callback: ", this.state.stars))

        // form2:
        // this.setState((prevState)=>{
        //     return{
        //         stars: prevState.stars+0.5
        //     }
        // })
        console.log("stars outside th callback: ", this.state.stars)
        // this.state.stars+=0.5;
        // console.log(this.state.stars)
    }

    decStars(){
        if(this.state.stars<=0){
            return;
        }
        this.setState((prevState)=>{
            return{
                stars: prevState.stars-0.5
            }
        })

    }

    // no binding needed for arrow func
    handleFav=()=>{
        this.setState({
            fav: !this.state.fav
        })
    }

    handleCart=()=>{
        this.setState({
            cart: !this.state.cart
        })
    }
    render(){
        {/*destructuring:   const {title}=this.state*/}
        const {title, plot, price, rating, stars, fav, cart}=this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"/>
                    </div>

                    <div className="right">
                        <div className="title">{this.state.title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                    <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={this.decStars.bind(this)}/>
                                    
                                    <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>

                                    <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" onClick={this.addStars.bind(this)}/>

                                    <span>{stars}</span>
                            </div>
                            {/* {fav?<button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.handleFav}>
                                {fav?"Un-favourite":"Favourite"}
                            </button>

                            <button className={cart?"unfavourite-btn":"cart-btn"} onClick={this.handleCart}>{cart?"Remove from Cart":"Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;