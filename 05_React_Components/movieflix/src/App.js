import MovieList from "./MovieList";
import Developer from "./Developer";
import Navbar from "./Navbar";
import { Component } from "react";
import { movies } from "./moviesData";
class App extends Component {
  constructor(){
    {/*If you are inhering a class then you must use a super constructor. i.e. first need to call constructor of inherited class/super*/}
    super();
    {/*State is built in object. It should be in class inside constuctor*/}
    this.state={
        movies : movies,
        cartCount: 0
    }
    // this.addStars=this.addStars.bind(this);
    
}

//--------------------------------------------------------------
// addStars(){
//     {/*We are inside class so "function" keyword not needed*/}
//     if(this.state.stars>=5){
//         return;
//     }
//     //set state = to update the state and re-render. It is asynchronus but in react 16 and prev react version setState was synchronus in promises and ajax calls.

//     // Batching: No matter how many setState func try to call only the last will get called in the "first" form. Not same for 2nd. But rendering happens once in both forms.
//     //form 1:
//     this.setState({
//         stars:this.state.stars + 0.5
//     },()=>console.log("stars inside th callback: ", this.state.stars))

//     // form2:
//     // this.setState((prevState)=>{
//     //     return{
//     //         stars: prevState.stars+0.5
//     //     }
//     // })
//     console.log("stars outside th callback: ", this.state.stars)
//     // this.state.stars+=0.5;
//     // console.log(this.state.stars)
// }

// decStars(){
//     if(this.state.stars<=0){
//         return;
//     }
//     this.setState((prevState)=>{
//         return{
//             stars: prevState.stars-0.5
//         }
//     })

// }

// // no binding needed for arrow func
// handleFav=()=>{
//     this.setState({
//         fav: !this.state.fav
//     })
// }

// handleCart=()=>{
//     this.setState({
//         cart: !this.state.cart
//     })
// }
//-------------------------------------------------------------------------------------

handleIncStar=(movie)=>{
    const {movies}=this.state;
    const mid=this.state.movies.indexOf(movie);
    if(movies[mid].star>=5){
        return;
    }
    movies[mid].star+=0.5;
    this.setState({
        movies: movies
    })
}

handleDecStar=(movie)=>{
    const {movies}=this.state;
    const mid=this.state.movies.indexOf(movie);
    if(movies[mid].star<=0){
        return;
    }
    movies[mid].star-=0.5;
    this.setState({
        movies: movies
    })
}

handleToggleFav=(movie)=>{

    const {movies}= this.state;
    const mid=movies.indexOf(movie);
    movies [mid].fav =!movies [mid].fav;
    
    this.setState({ 
        movies
    })
}

handleToggleCart= (movie) => {
    let {movies, cartCount} = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].cart = !movies[mid].cart;
    console.log(movies [mid].cart)
    
    if(movies[mid].cart){
      cartCount=cartCount+1;
    }
    else{
      cartCount=cartCount-1;
    }
    this.setState({
        movies, 
        cartCount
    })
}
  render(){
    const {movies, cartCount}=this.state;
  return (
    <>
    <Navbar cartCount={cartCount}/>
    <MovieList movies={movies} 
    addStars={this.handleIncStar} 
    decStars={this.handleDecStar}
    toggleFav={this.handleToggleFav}
    toggleCart={this.handleToggleCart}
    />
    <Developer name="Sandip" />
    {/* <h3>OR</h3>
    <Developer /> */}
    </>
  )
  }
}

// Developer.defaultProps={
//   name:"Sandy"
// }
export default App;
