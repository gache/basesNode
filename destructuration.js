
let spiderMan = {
    nom: "Parker",
    prenom: "Peter",
    pouvoir: "Peut s'accrocher",
    getNom: function() {
        return `${this.prenom} ${this.nom} - Poder: ${this.pouvoir} `
   }
}

/**
 *  L'affectation par décomposition ou déstructuration  (destructuring en anglais) est une expression JavaScript qui permet d'extraire (unpack en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet. 
 */
let { nom, prenom, pouvoir} = spiderMan;
//si je veux changer le nom de la variable 
//let { nom: premierNom, prenom, pouvoir} = spiderMan; 

console.log(nom, prenom, pouvoir);

