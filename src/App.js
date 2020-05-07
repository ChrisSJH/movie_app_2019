import React from 'react';
import PropTypes from "prop-types";

function Food({ name ,picture, rating }){
  //console.log(props);
return <div>
  <h2>I like {name}</h2>
  <img src={picture} alt={name} />
  </div>;
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
/*
function App() {
  return (
    <div>
      {/*hello}
      {/*<h1>Hello!!!!!</h1>}
      {foodILike.map(dish => <Food  key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
      {/*foodILike.map(renderFood)}
      </div>
  );
}*/

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    //this.state.count += 1;
    this.setState({count: +1 });
    //console.log("add");
  }
  minus = () => {
    this.setState({count:-1 });
    //console.log("minus");
  }
  render(){
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
    
  };
}

export default App;
