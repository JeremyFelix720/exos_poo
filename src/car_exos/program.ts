import { Car } from "./Car.js";
import { Conductor } from "./Conductor.js";

export const car_exos = () => {

  const littleCar = new Car("Little car", "red", 22);
  const newCar = new Car("New car", "black", 100);
  
  const conductor1 = new Conductor("Thomas", "LAFORGE", [littleCar, newCar]); // J'assigne la classe "newCar" à la classe "conductor1".
  
  conductor1.startToCrash(0); // Je fais crasher 1 fois la voiture en index 0;
  conductor1.startToCrash(1);
  conductor1.startToCrash(1); // Je fais crasher 2 fois la voiture en index 1;
  
  /*
  console.log("L'état de le petite voiture est toujours de : " + littleCar.state + "%");
  console.log("L'état de la voiture neuve est maintenant de : " + newCar.state + "%");
  */
  
  conductor1.cars.forEach(car => {
    console.log("La couleur de la voiture '" + car.name + "' est : " + car.color + " et a pour état : " + car.state + "%");
  })
}