import React, {useState, useEffect} from "react";
import "./App.css";
import Navigation from "./Navigation";
import Photo from "./Photo";
import axios from 'axios';

function App() {
  const [navigation, setNavigation] = useState('');
  const [nasaPhoto, setNasaPhoto] = useState(null);
  const [details, setDetails] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=cFlc5i4EY5FWaMYSg9eNJa0p9Tvhn35Kjombothm`)
      .then(res => {
        setNasaPhoto(res.data.url)
        setDetails(res.data.explanation)
        setTitle(res.data.title)
        console.log(res.data)
      })
      .catch( err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
     
      {setNavigation && (
       <Navigation navigation={navigation}/>
     
     )}
      {setNasaPhoto && (
      <Photo nasaPhoto={nasaPhoto} details={details} title={title}/>
      )}
       

    
    </div>
  );
}

export default App;


     
      
  