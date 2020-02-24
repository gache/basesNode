

let nom = "Spider-man";
let reel = "Peter Parker";


// console.log(nom + ' ' +  real); // Concaténation 
// console.log(`${ nom } ${ real }`); // Template 


let nomComplet = nom + ' ' + reel;
let nomComplet2 = `${ nom } ${ reel }`;

// on voit que elle sont exactement la même chose 
console.log(nomComplet === nomComplet2 );

// Je peux mettre les template dans une fonction si je veux et voir son resultat;
function getNom(){
    return `${ nom } ${ reel }`
}
console.log(`Le nom est: ${ getNom() }` );

