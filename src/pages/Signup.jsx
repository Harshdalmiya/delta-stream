import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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
    .body{
        gap:1rem;
        .text{
            text-align:center;
            font-size:1.3rem;
            h1{
                padding:0rem 15rem;
                line-height:0px;
            }
            h4{
                line-height:0px;
            }
            h6{
                line-height:0px;
            }

        }
        .form{
            display:flex;
            justify-content:center;
            /*grid-template-column:${({isPassword})=>isPassword?"1fr 1fr":"1fr 2fr"}*/
            width:60%;
            input{
                color:black;
                border:none;
                padding:1.5rem;
                font-size:1.2rem;
                width:350px;
                height:13px;
                border: 1px solid black;
                &:focus{
                    outline:none;
                }
            }
            button{
                padding:0.5rem 1rem;
                color:white;
                background-color:#7678ed;
                border:none;
                cursor:pointer;
                font-weight:bolder;
                font-size:1.0rem;
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
    }
}`;
export default function Signup() {
    const navigate=useNavigate();
    const[isPassword,setisPassword]=useState(false);
    const[formValue,setformValue]=useState({
        email:"",
        password:""
    })
    const handleSignin=async()=>{
        try{
            const{email,password}=formValue;
            await createUserWithEmailAndPassword(firebaseAuth,email,password);

        }
        catch(err){
            alert("User already registered.Log In");
            navigate("/login");
            console.log(err);
        }
    };
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/abc12098");
    });
  return (
    
    <Container isPassword={isPassword}>
        <BackgroundImage/>
        <div className="content">
        <Header login='true'/>
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies,TV shows and more</h1>
                <h4>Watch anywhere.Cancel anytime.</h4>
                <h6>Ready to watch?Enter your email to create or restart memebership</h6>

            </div>
            
                <div className="form">
                <input placeholder="Email address" name="email" 
                value={formValue.email} onChange={(e)=>setformValue({
                    ...formValue,[e.target.name]:e.target.value,
                })}
                />
                {
                    isPassword && (<input placeholder="Password" name="password"
                    value={formValue.password} onChange={(e)=>setformValue({
                        ...formValue,[e.target.name]:e.target.value,
                    })}
                    />)
                }
                
                {!isPassword &&(<button onClick={()=>setisPassword(true)}>Get started</button>)}
                
            </div>
            <button onClick={handleSignin}>Sign Up</button>

        </div>

        </div>
        
    </Container>
  )
}
