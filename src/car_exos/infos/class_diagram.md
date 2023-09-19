```mermaid
classDiagram
    class Car{
        +String name
        -String _color
        +String state
        +crash()
        +get color()
        +set color()
    }


    class Conductor{
        +String firstname
        +String lastname
        +Array<Car> cars
        +startToCrash(carIndex)
    }
    ```


