import React from 'react'
import styled from 'styled-components'


const StylePhoto = styled.div`
      width: 100%;
      
      p,h3{
        width: 90%;
        text-align: center;
        margin: auto;
        padding: ${pr => pr.theme.padding.large};
        color: ${pr => pr.theme.tertiaryColor};
        font-family: ${pr => pr.theme.fontFamily};
      }
      
      img {
        border: 3px solid ${pr => pr.theme.secondaryColor};
  
      &:hover {
        transform: scale(.8);
        transition: all 1s ease-in-out;
      }
      transition: all .5s ease-in-out;
    }
 
  `

export default function Photo (props) {

  const { nasaPhoto, details, title } = props;
  

  return (
    <StylePhoto>
      <h3> {title}</h3>
      <img src={nasaPhoto} alt='The NASA'/>
      <p>{details}</p>
    </StylePhoto>
  )
}
