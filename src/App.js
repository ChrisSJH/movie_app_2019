import React from 'react';
import axios from "axios";
import Movie from "./Movie";
// import PropTypes from "prop-types";
//lec13/30 nomad coder: class component

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies.data.data.movies);
    //console.log(movies);
    this.setState({movies, isLoading: false});
  }
  //componentDidMount is called right after render
  componentDidMount(){
    //fetch + nice little layer, need to install
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (<div>{isLoading ? "Loading..." : 
    movies.map(movie => 
    <Movie 
      key={movie.id}
      id={movie.id} 
      year={movie.year} 
      title={movie.title} 
      summary={movie.summary} 
      poster={movie.medium_cover_image}/>
    )}</div>)
    
  };
}

export default App;
