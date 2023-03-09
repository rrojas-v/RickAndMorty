import { Link } from "react-router-dom";
import styled from "styled-components";

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
//

export default function Card(props) {

   console.log(props.name);

   return (
         <Div>
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
