import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import styled from 'styled-components';
import React, { useState } from 'react'; 
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

//import Home from './components/Home';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';


function App () {

  const [characters, setCharacters] = React.useState([]);
  const [access, setAccess] = React.useState(false);
  let username = 'rick';
  let password = 'app';

  const location = useLocation();

  const onCloseCard = (Id) => {
    //window.alert('Se cierra la card desde App.js')
    //console.log("onCloseCard",Id, characters.characters.filter(x=>x.name !== Id), Array.isArray(characters.filter(x=>x.name !== Id)));
    if (Id) {
      setCharacters(
        (characters) => characters.filter(x=>x.name !== Id)
      )
    }
  }  

  const onSearch = (character) => {
    console.log('ejecutando onSearch');
    if (characters.filter(c=>c.id == character).length > 0) {
      alert('personaje repetido');
    }else{
      
       fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          
          //console.log(data);

          if (data.name) {
              setCharacters(
                (characters) => [...characters, data]
              );
          } 
          else {
              window.alert('No hay personajes con ese ID');
          }
        });
    }
    //console.log(characters);
  }  

  const navigate = useNavigate();
  const login = function(userData) {

    console.log('login', userData);

    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/Home');
    }
    else {
      alert('Usuario y/o contrasena incorrectos');
    }
  }
  useEffect(() => {
    
    console.log('useEffect()', 'access', access);

    !access && navigate('/');
  }, [access]);

  return (
    <div>
      
      {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      <hr />
      
       <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onCloseCard} />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:detailid' element={<Detail/>}></Route>
        <Route exact path='/' element={<Form login={login}/>}></Route>
      </Routes> 

    </div>
  )
}

export default App
