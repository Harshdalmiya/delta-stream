import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import dstream from "../assets/dstream.png"

const Container=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:2rem 2rem 0rem 0rem;
.logo{
    padding-right:5rem;
    img{
        height:25rem;
        width:25rem;
    }
}
button{
    padding:0.5rem 1rem;
    color:white;
    background-color:#7678ed;
    border:none;
    cursor:pointer;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.0rem;
}
`

export default function Header(props) {
  const navigate=useNavigate();
    return (
    <Container className='flex a-center j-between'>
        <div className='logo'>
            <img src={dstream} alt='logo'/>

        </div>
        <button onClick={()=>navigate(props.login?"/login":"/")}>{props.login ? "Log In" : "Sign Up"}</button>
    </Container>
  )
}
