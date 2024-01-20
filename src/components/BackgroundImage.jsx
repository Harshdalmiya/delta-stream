import React from 'react'
import styled from 'styled-components'
import loginimage from '../assets/loginimage.jpg'
const Container=styled.div`
width:100vw;
height:100vh;
img{
    width:100vw;
height:100vh;

}

`
export default function BackgroundImage() {
  return (
    <Container>
        <img src={loginimage}/>
      
    </Container>
  )
}
