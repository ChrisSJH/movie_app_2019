import React from 'react';
// import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  //componentDidMount is called right after render
  componentDidMount(){
    //delay fuction isLoading become false after 6 seconds
    setTimeout(() => {
      this.setState({isLoading: false });
    }, 6000);
  }
  render(){
    const { isLoading } = this.state;
    return (<div>{isLoading ? "Loading..." : "We are ready"}</div>)
    
  };
}

export default App;
