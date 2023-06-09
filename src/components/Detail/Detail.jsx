import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";




const Detail = () => {
    const {id}= useParams()

    const [character, setCharacter]= useState([])

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

  return ( 
       <div>

                
                
                   
                                    <h2>{character?.name}</h2>
                                    <h4>{character?.status}</h4>
                                    <h4>{character?.species}</h4>
                                    <h4>{character?.gender}</h4>
                                    <h4>{character?.origin?.name}</h4>
                                    <img src={character?.image} alt={character?.name} />
                       
         </div>

  );
}

export default Detail;