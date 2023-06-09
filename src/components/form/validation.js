const validation = (userData, errors, setErrors) => {

if (!userData.username) 
setErrors({...errors, username:"por favor completa este campo"})

else if (userData.username.length > 35) 
setErrors({...errors, username:"no puede tener mas de 35 caracteres"})

else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){

    setErrors({...errors, username: "email invalido"})
} else{
    setErrors({...errors, username: ""});
} if(!/^(?=.*\d).{6,10}$/.test(userData.password)){
    errors.password = "La contraseña debe contener al menos 1 numero y tener entre 6 y 10 caracteres"
}


};

export default validation;