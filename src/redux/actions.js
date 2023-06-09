//Construye dos actions-creators:

//addFav: esta función recibe un personaje por parámetro. Deberás retornar una action con el type igual a "ADD_FAV", y el payload igual a ese personaje.

//removeFav: esta función recibe un id por parámetro. Deberás retornar una action con el type igual a "REMOVE_FAV", y el payload igual a ese id.

//Exporta ambas funciones.


export const addFav = (character) =>{
    return {type: "ADD_FAV", payload: character }
}

export const removeFav = (id) =>{
return{type: "REMOVE_FAV", payload: id}
}