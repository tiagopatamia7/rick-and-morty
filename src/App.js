import "./App.css";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/nav";
import styled from "styled-components";
import axios from "axios";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import About  from "./components/About/About"
import Detail from "./components/Detail/Detail";
import Form from "./components/form/form";



function App() {
const [characters, setCharacters] = useState ([])
const {pathname} = useLocation();
const [access,setAccess] =  useState(false);
const navigate = useNavigate();

useEffect(() => {
  !access && navigate("/")
}, [access]);

const username = "tiago@gmail.com";
const password = "Tiago2001";

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    })
    .catch((error) => {
      window.alert('¡No hay personajes con este ID!');
    });
 };

 const onClose = (id) => {
setCharacters(characters.filter((char) => char.id !== Number(id)))
 }
 
 const login = (userData,) => {
  if(userData.username===username && userData.password === password){
    setAccess(true);
    navigate("/home");
  } else{
    alert("credenciales incorrectas")
  }
 };




  return (
    <div className="App">
      <div className={styled.nav}>
      {pathname !== "/" && <Nav onSearch = {onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
      <Route path= "/home"  element= { <Cards characters={characters} onClose = {onClose}/>} />
      <Route path="/about" element= {<About/>}/>
      <Route path="/detail./:id" element={<Detail/>}/>
 
      </Routes>
      </div> 
    </div>
  );

}


export default App;
