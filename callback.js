/**
 * 
 * @param {*} id 
 * @param {*} callback  est une fonction de rappel (aussi appelée callback en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.
 */

// setTimeout(()=>{
//     console.log("Hello world");
// }, 3000);

let getUserById = (id, callback) => {
    let user = {
        prenom: "Erick",
        id,
    }

    if(id === 20 ){
        callback(`L'Utilisateur avec id ${id} ne trouve pas dans la BD`)
    } else{
        callback(null, user);
    }
}

getUserById(5, (err, user) => {

    if (err) {
        return console.log(err);
        
    }
    console.log("L'Utilisateur de la BD est", user);
})