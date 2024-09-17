import React from 'react'
import styled from 'styled-components'

const StyledNavigation = styled.div`
color: ${pr => {
    return pr.danger ? pr.theme.dangerColor : pr.theme.primaryColor
  }};
  font-weight: ${pr => pr.bold ? 'bold': 'initial'};
  width: 100%;

  nav{
    display: flex ;
    justify-content: space-evenly;
    width: 100%;
    margin: auto;
  }
  
  nav a{
    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};
    font-family: ${pr => pr.theme.fontFamily};
    width: 20%;
    text-align: center;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5% 0;
    text-transform: uppercase;

}
    a:hover {
    background-color: ${pr => pr.theme.dangerColor};
    color: ${pr => pr.theme.white};
    transition: all 1s ease-in-out;
  }

  a:active {
    background-color: ${pr => pr.theme.dangerColor};
    color: ${pr => pr.theme.white};
  }
`

export default function Navigation(props) {

  const { navigation } = props;

  return (
    // <StyledFriend danger={navigation.nav === 'Photo of the Day'} >
    <StyledNavigation danger={navigation.a === 'Photo of the Day'} >
        <nav>
            <a href = '#home'> Home</a>
            <a href = '#about'>About</a>
            <a href = '#photo' class = 'active'>Photo of the Day</a>
            <a href = '#contact'>Contact</a>
        </nav>
    </StyledNavigation>
  )
}
