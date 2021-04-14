import React, {useState, useEffect} from "react";
import "./App.css";
import Navigation from "./Navigation";
import Photo from "./Photo";
import axios from 'axios';

function App() {
  const [navigation, setNavigation] = useState('');
  const [nasaPhoto, setNasaPhoto] = useState(null);

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=cFlc5i4EY5FWaMYSg9eNJa0p9Tvhn35Kjombothm`)
      .then(res => {
        setNasaPhoto(res.data.url)
        console.log(res.data)
      })
      .catch( err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>Welcome To NASA</h1>
     
      {setNavigation && (
       <Navigation />
     
     )}
      {
      
        <Photo nasaPhoto={nasaPhoto}/>
        }
       <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

    
    </div>
  );
}

export default App;


     
      
  