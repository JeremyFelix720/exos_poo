export class Car {
    public name: string
    private _color: string
    public state: number
  
    constructor(
        name: string,
        color: string,
        state: number
    ) {
      console.log('Initialisation de la voiture')
      this.name = name,
      this._color = color,
      this.state = state
    }

    public crash(){
        this.state *= 0.8;
    }

    public get color():string {
        return this._color;
    }

    public set color(color:string) {
        this._color = color;
    }
  }