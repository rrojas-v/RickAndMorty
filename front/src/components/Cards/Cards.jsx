import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;

   //console.log("Cards",typeof characters, Array.isArray(characters), characters);

   return(
      <div style={{display:'flex', justifyContent:'center'}}>
         {characters.map(character => 
         < Card key={character.name}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={props.onClose}
         />)}
      </div>
   )
}
