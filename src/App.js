import React from 'react';

function Food({ name ,picture }){
  //console.log(props);
return <div>
  <h2>I like {name}</h2>
  <img src={picture} alt={name} />
  </div>;
}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9HIajQZ7zMIBNNNf0uTGNg3G5XlZ9o8qyF41ibu1lIskQYGk0&usqp=CAU"
  },
  {
    id:2,
    name: "ramen",
    image:
    "https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df68eee85e37518ef7d927330752fcc3f28a593ec07102d406eab0c89118497d8c7026281abefa838fcfec6747e1a884da5"
  },
  {
    id:3,
    name: "samgiopsal",
    image:
    "https://lh3.googleusercontent.com/proxy/bXPT14tJvCnLaVWeUKRuuGTnqKU71lOh2JqeJ1x2rqt1aDAt_RxD6U7ubKvcH0KcPqL1QrKIUuJMBv3dEDQDGp7XWdjEH6MjdRAAk9nQqzflklzFrk2jcgbNH-aVNSu9YBcNtqTdLg"

  },
  {
    id:4,
    name: "potato chip",
    image:
    "https://w.namu.la/s/1ae24f8d53f75673b6c5fef6883439be51b8b90d2e639a87d84b2cfe207a73407fc161346d56563361ddde54592094d29408f148a4d2cf0559954ae41689cd57cafa3f0366e751a1f603789b2887cfafc6324bf86a4dc15c0c177950c0da2841"

  },
  {
    id:5,
    name: "kimbap",
    image: 
    "https://lh3.googleusercontent.com/proxy/UUtlb6GpETUOCEtxihtWUQUpUbMg6KJlGtPQHk5YxttxSMK2YXNEaoTtYizwMhxt1ff4gOkAZmh3qvKGOsYTdMDP9uSZ5hK_R67mtzfAOmxCs-VIf_lEEGvrwDoSLRjVVDs0eUSGpJELL21xdhwlTX_wuQ"

  },
  ]
function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />
}
function App() {
  return (
    <div>
      {/*hello*/}
      {/* <h1>Hello!!!!!</h1>
      {foodILike.map(dish => <Food  key={dish.id} name={dish.name} picture={dish.image}/>)}
      */}
      {foodILike.map(renderFood)}
      </div>
  );
}

export default App;
