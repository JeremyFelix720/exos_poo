import { Car } from "./Car";

export class Conductor {
    private firstname: string
    private lastname: string
    public cars: Array<Car> // Le type attribué est un tableau contenant des instances de la classe associée.
  
    constructor(firstname: string, lastname: string, cars: Array<Car>) {
      this.firstname = firstname,
      this.lastname = lastname,
      this.cars = cars
    }
  
    public sayHello() {
      console.log("Bonjour, je m'appelle " + this.firstname);
    }
  
    public startToCrash(carIndex:number) {
      this.cars[carIndex].crash();
    }
}