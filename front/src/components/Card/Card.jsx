import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFav, remFav } from "../redux/actions";
import { useState } from "react";
import { connect } from "react-redux";

const Img = styled.img`
   border-radius: 70%;
   box-shadow: 2px -6px 10px #000;
   //padding: 3px;
`;
const Div = styled.div`
   border-radius: 5%;
   border: 15px;
   padding: 5px;
   margin: 20px;

   background-color:orange;
   color:white;
`;



function Card(props) {

   console.log(props);

   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         remFav(props.id);
      }
      else {
         setIsFav(true);
         addFav(props)        
      }
   };

   return (
         <Div>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }

            <button onClick={() => props.onClose(props.name)}>X</button>
            <Link to={`/detail/${props.id}`}>
               <h2>Name: {props.name}</h2>
            </Link>
            <h2>Specie: {props.species}</h2>
            <h2>Gender: {props.gender}</h2>         
            <Link to={`/detail/${props.id}`}>
               <Img  src={props.image} alt="img not found" />         
            </Link>
         </Div>
   );
}

const mapStateToProps = state => {
   const { myFavorites } = state;
   return {
      myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: character => {
         dispatch(addFav(character))
      },
      remFav: id => {
         dispatch(remFav(id))
      }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);