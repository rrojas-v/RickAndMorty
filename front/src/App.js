import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import styled from 'styled-components';
import React, { useState } from 'react'; 
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


//import Home from './components/Home';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Login/Form.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

function App () {

  //dotenv.config();
  
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
    console.log('ejecutando onSearch', character);
    if (characters.filter(c=>c.id == character).length > 0) {
      alert('personaje repetido');
    }else{

      //console.log('process.env.REACT_APP_APIBACKENDURL',process.env.REACT_APP_APIBACKENDURL);
      //console.log('process.env.REACT_APP_APIBACKENDURL',process.env);

       //fetch(`https://rickandmortyapi.com/api/character/${character}`)
       //fetch(`http://localhost:3001/rickandmorty/character/${character}`)
       fetch(`${process.env.REACT_APP_APIBACKENDURL}character/${character}`)
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

    //console.log('login', userData);

    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/Home');
    }
    else {
      alert('Usuario y/o contrasena incorrectos');
    }
  }
  useEffect(() => {    
    
    //console.log('useEffect()', 'access', access);
    !access && navigate('/');

  }, [access]);

  return (
    <div>
      
      {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      <hr />
      
      <Routes>
       <Route exact path='/' element={<Form login={login}/>}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onCloseCard} />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:detailid' element={<Detail/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes> 

    </div>
  )
}

export default App
