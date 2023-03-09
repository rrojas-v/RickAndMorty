import React, {useState} from "react";

export default function SearchBar(props) {
   //console.log("SearchBar",props.onSearch);
   
   const [input, setInput] = useState('');
   // function SearchBarInput(e){
   //    setInput({ input: e.target.value });
   // }   

   return (
      <div>
         <input type='search' value={input} onChange={e=> setInput(e.target.value) } />
         <button onClick={ () => props.onSearch(input) }>Agregar</button> 
      </div>
   );
}

