/**
 * let et var 
 * 
 * let et var font la même chose déclarent une variable mais la forme comme cette variable vivait est différent       voir l'exemple.
 * 
 * Quand j’initialise une variable avec le mot Var je peux initialiser cette variable la quantité que je veux et sa valeur va être la dernière assignation que je fais à cette variable. 
 * 
 * Une caractéristique d’une initialisation d’une variable avec le mot let ce qu’on ne peut pas reinitialiser la    variable, on peut changer sa valeur. 
 * 
 */


 /**
  * Declarion d'una variable avec Let
  */
 let nom = "Spider-Man";

 if(true){
    let nom ="Wolverin";
 }
 console.log(nom);

/**
  * Declarion d'una variable avec Var
  */

 var nom2 = "Spider-Man";

 if(true){
    var nom2 ="Wolverin";
 }
 console.log(nom2);
 