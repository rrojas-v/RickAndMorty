import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Span = styled.span`

color:cornflowerblue;
`;

export default function Detail() {
    
    //console.log(useParams());

    const { detailid } = useParams();
    const [character, setCharacter] = useState({});
    //console.log('id',detailid);
    const navigate = useNavigate();

    useEffect(() => {

        console.log(`Ejecutando useEffect ${detailid}`);        

        fetch(`https://rickandmortyapi.com/api/character/${detailid}`)
          .then((response) => response.json())
          .then((character) => {
            if (character.name) {
              setCharacter(character);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert(`No hay personajes con ese ID\n${err}`);
          });
        return setCharacter({});
      }, [detailid]);

      //console.log(character);

    const toHome = function() {
        navigate("/");
    }

    return (
        <div>
            <button onClick={toHome}>Home</button>
            <div style={{display:'flex', justifyContent:'center'}}> 
                <img src={character.image}/>
                <Span>
                    <h1>Nombre: {character.name}</h1>                
                    <h2>Estatus: {character.status}</h2>
                    <h2>Specie: {character.specie}</h2>                
                    <h2>Genero: {character.gender}</h2>                    
                    <h2>Origen: {(character.origin)?character.origin.name:''}</h2>                    
                </Span>      
            </div>
        </div>
    );
}