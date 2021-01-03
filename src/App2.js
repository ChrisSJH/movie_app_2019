import React from 'react';
// import axios from "axios";

function Food({name, pic}){
return <div>
<h1> I like {name}</h1> 
<img src={pic} alt={name}/>  
      </div>
   
}

function renderFood(dish){
    //console.log(dish);
    return <Food name ={dish.name} picture={dish.image}/>
}

const foodILike = [
    {
        name:"kimchi",
        image:"https://www.google.com/search?q=kimchi&sxsrf=ALeKk03keEqspSHa7aEnojUcy4WEwMLD8A:1609639453418&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi7h9me1v7tAhWnhOAKHXREB-4Q_AUoAXoECBIQAw&biw=1848&bih=949#imgrc=9lLZaiVHdSp-VM"
    },
    {
        name:"samgyuosal",
        image:"https://www.google.com/search?q=%EC%82%BC%EA%B2%B9%EC%82%B4&sxsrf=ALeKk03xgBtjryitHYNo1B83EQlFcYQXUg:1609639612386&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiS2L_q1v7tAhXRVN8KHTTCAu4Q_AUoAXoECAUQAw&biw=1848&bih=949#imgrc=tr3E10LIZChViM"
    },
    {
        name:"bullgogi",
        image:"https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&tbm=isch&ved=2ahUKEwj4rsfr1v7tAhX1cc0KHdiRDtQQ2-cCegQIABAA&oq=qnfrhrl&gs_lcp=CgNpbWcQARgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECCMQJzoHCCMQ6gIQJ1Ds1AJY-esCYP3yAmgLcAB4AYABYYgB-ASSAQE5mAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=vibxX_jXJPXjtQbYo7qgDQ&bih=949&biw=1848#imgrc=LyT0QCGXUKarVM"
    }
];

function App()
{
    return (
        <div>
            {/* {foodILike.map(dish => <Food name={dish.name} pic = {dish.image} />)} */}
            {console.log(foodILike.map(renderFood))}
            {foodILike.map(renderFood)}
        </div>
    )
}

/*
// import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {data: {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies);
    //console.log(movies);
    this.setState()
  }
  //componentDidMount is called right after render
  componentDidMount(){
    //fetch + nice little layer, need to install
    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
    return (<div>{isLoading ? "Loading..." : "We are ready"}</div>)
    
  };
}

export default App;
*/
