import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

const Container=styled.div`
position:relative;
.content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
    .form-container{
        gap:2rem;
        height:85vh;
        .form{
            padding:2rem;
            background-color:#000000b0;
            width:50vh;
            gap:2rem;
            color:white;
            .container{
                gap:1rem;
                input{
                    padding:0.5rem 1 rem;
                    width:15rem;
                    height:35px;
                }
                button{
                    margin-top:1rem;
                    padding:0.5rem 1rem;
                    background-color:#7678ed;
                    color:white;
                    border:none;
                    cursor:pointer;
                    border-radius:0.2rem;
                    font-weight:bolder;
                    font-size:1.0rem;
                }
            }
        }
    }
    
    }
`;
export default function Login() {
    const navigate=useNavigate();
    const[formValue,setformValue]=useState({
        email:"",
        password:""
    })
    const handleLogin=async()=>{
        try{
            const{email,password}=formValue;
            await signInWithEmailAndPassword(firebaseAuth,email,password);

        }
        catch(err){
            console.log(err);
        }
    };
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/abc12098");
    });
  return (
    
    <Container>
        <BackgroundImage/>
        <div className='content'>
            <Header/>
            <div className='form-container flex column a-center j-center'>
                <div className="form flex column a-center j-center">
                    <div className='title'>
                        <h2>Login</h2>
                    </div>
                    <div className="container flex column">
                    <input placeholder="Email Address" name="email" 
                 value={formValue.email} onChange={(e)=>setformValue({
                    ...formValue,[e.target.name]:e.target.value,
                 })}
                 />
        
                    <input placeholder="Password" name="password"
                    value={formValue.password} onChange={(e)=>setformValue({
                        ...formValue,[e.target.name]:e.target.value,
                    })}
                    />
                 <button onClick={handleLogin}>Log In</button>
                 </div>
                 
    
                 </div>
            </div>
        </div>
        
    </Container>
  )
}
