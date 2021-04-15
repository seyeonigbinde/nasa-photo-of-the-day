import React, {useState, useEffect} from "react";
import "./App.css";
import Navigation from "./Navigation";
import Photo from "./Photo";
import axios from 'axios';
import styled from 'styled-components';

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

  const StyleHeader = styled.div`
   
    display: flex ;
    justify-content: space-between;
    width: 90%;

   h1{
    color: ${pr => pr.theme.tertiaryColor};
   font-family: ${pr => pr.theme.fontFamily};
   font-size: 2.3rem;
   padding: ${pr => pr.theme.padding.small};
    }

    img{
      width: 20%;
      margin: auto;
    }

  `

  return (
    <div className="App">

      <StyleHeader>
        <img src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' alt=''/>
        <h1>National Aeronautics and Space Administration (NASA)</h1>
        </StyleHeader>
     
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


     
      
  