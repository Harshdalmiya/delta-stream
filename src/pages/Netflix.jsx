import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
const Container=styled.div`
background-color:black;
.hero{
  position:relative;
  .background-image{
    filter:brightness(80%);
  }
  img{
    height:100vh;
    width:100vw;
  }
  .container{
    position:absolute;
    bottom:5rem;
    .logo{
      img{
        width:25%;
        height:25%;
        margin-left:5rem;
      }
    }
    .buttons{
      display:flex;
      margin:5rem;
      gap:2rem;
      button{
        font-size:1.4rem;
        gap:1rem;
        border-radius:0.2rem;
        padding:0.5rem;
        padding-left:2rem;
        padding-right:2.4rem;
        border:none;
        cursor:pointer;
        transition:0.3s ease-in-out;
        &:hover{
          opacity:0.8;
        }
        &:nth-of-type(2){
          background-color:rgba(109,109,110,0.7);
          color:white;
          svg{
            font-size:1.8rem;
          }
        }


      }
    }

  }
}
`
export default function Netflix() {
    const [isScrolled,setIsScrolled]=useState(false);
    const navigate=useNavigate();
    const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);
    const movies=useSelector((state)=>state.netflix.movies);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getGenres());
    },[]);

    useEffect(()=>{
      if(genresLoaded) dispatch(fetchMovies({type:"all"}));
    },[genresLoaded]);

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0?false:true);
        return ()=>(window.onscroll=null);
    };
    //console.log(movies);
  return (
    <Container>
        <Navbar isScrolled={isScrolled}/>
        <div className="hero">
          <img src="https://goinswriter.com/wp-content/uploads/2013/10/breaking-bad.png" alt="back" className="background-image"/>
          <div className="container">
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png" alt="Movie Logo"/>
            </div>
            <div className="buttons">
              <button className="flex j-center a-center" onClick={()=>navigate('/player')}>
                <FaPlay/> Play
              </button>
              <button className="flex j-center a-center">
                <AiOutlineInfoCircle/> More Info
              </button>
            </div>
          </div>
        </div>
        <Slider movies={movies}/>
    
    </Container>
  )
}
