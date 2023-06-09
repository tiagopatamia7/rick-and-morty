


const initialState={
myFavorites:[]


}



export const reducer = (state= initialState, action)=>{
    switch(action.type){
    case "ADD_FAV":
        return{
            ...state,
            myFavorites: [...state.myFavorites, action.payload ]

        }

    case "REMOVE_FAV": 
    
    const charcatersIdValido= state.myFavorites.filter(
        character => character.id !== Number(action.payload)
    )
    return{
        ...state,
myFavorites: charcatersIdValido
    };

    default:
        return{
            ...state
        }
}
};