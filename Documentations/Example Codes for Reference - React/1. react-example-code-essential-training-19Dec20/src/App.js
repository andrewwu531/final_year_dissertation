import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import restaurant from "./restaurant.jpg";
// https://api.github.com/users/eveporcello

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We server the most {props.adjective} food around.</p>
      <img src={restaurant} height={200} alt="napkin and silverwear"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))} 
      </ul>
    </section>
  );
}

function Footer(props) {
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Minestrone"
];

const dishObjects = dishes.map((dish,i) => ({id: i, title: dish}))
console.log(dishObjects)

dishes.map((dish) => console.log(dish));

function AppOne() {
  return (
    <div className="App">
      <Header name="Horacio"/>
      <Main adjective="amazing" dishes={dishObjects}/> 
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

function App( {login} ) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);

  useEffect(() => {
    if (!login) return; // jump out
    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]); // [login] so useEffect is called when the login value changes 

  if (loading) return <h1> Loading...</h1>;
  if (error) return <pre>JSON.stringify(error,null,2) </pre>;
  if (!data) return null;

  if (data){
    return (
    <div>
      <h1>{data.login}</h1>  
      <img alt={data.login} src={data.avatar_url} />
    </div>
    );
  }

  return <div>No User Available</div>; 
}

// function SecretComponent() {
//   return <h1>Super secret informaiton for authorized users only.</h1>
// }

// function RegularComponent() {
//   return <h1>Everyone can see this component.</h1>
// }

// function App() {
//   const [checked, toggle] = useReducer((checked) => !checked, false);

//   return (
//     <>
//       <input type="checkbox" 
//       value={checked} 
//       onChange={toggle}
//       />
//       <p>{checked ? "checked" : "not checked"}</p>
//     </>
//   );
// }

  // const [emotion, setEmotion] = useState("happy");
  // const [secondary, setSecdonary] = useState("tired");

  // useEffect(() => {
  //   console.log(`It's ${emotion} around here!`);
  // }, [emotion]);

  // useEffect(() => {
  //   console.log(`It's ${secondary} around here!`);
  // }, [secondary]);


      {/* <h1>Current emotion is {emotion} and {secondary}.</h1>
      <button onClick={() => setEmotion("happy")}>
        Happy
      </button>
      <button onClick={() => setSecdonary("crabby")}>
        Make Crabby
      </button>
      <button onClick={() => setEmotion("frustrated")}>
        frustrate
      </button>
      <button onClick={() => setEmotion("enthusastic")}>
        enthuse
      </button> */}

// function App(props) {
//   return (
//     <>
//     {props.authorized ? <SecretComponent /> : <RegularComponent /> }
//     </>
//   )
// }

export default App;