import { Apple } from "./Apple.js";

export const apple_exos = () => {

    const apple1 = new Apple('Golden', 'yellow');
    console.log(apple1.color);

    const apple2 = new Apple('Granny Smith', 'verte');
    //apple2.afficher();

    apple2.show();

    console.log("la nouvelle pomme est de couleur " + apple2.color); // apple2.color fait appel à l'accesseur "get color()" pour récupérer la valeur de l'attribut privé "_color".

    apple2.color = 'rouge'; // apple2.color = 'nouvelle valeur" fait appel à l'accesseur "set color()" pour modifier la valeur de l'attribut privé "_color".

    console.log("la nouvelle pomme est de couleur " + apple2.color);


    const apple3 = new Apple("Pink Lady", "pink"); // creation d'une nouvelle instance de la classe "Pomme"

    apple3.color = "yellow"; // change color in yellow

    console.log("La couleur de la nouvelle pomme est : " + apple3.color);


    console.log("Nombre de secondes écoulées depuis le 1er janvier 1970 : " + Apple.give_time()); // Est-ce pertinent de mettre une méthode "donner l'heure" dans la class "Pomme" ?

}
