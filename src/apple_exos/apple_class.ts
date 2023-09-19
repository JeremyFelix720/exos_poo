export class Apple {

    private name: string
    private _color: string

    constructor(
      name: string,
      color: string,
    ) {
      console.log('Initialisation de la pomme')
      this.name = name
      this._color = color
    }

    private afficher() {
      console.log('Nom de la pomme : ' + this.name + ' / couleur : ' + this._color);
    }

    public show() {
      this.afficher();
    }

    public get color(): string {
      return this._color;
    }

    public set color(color: string) {
      this._color = color;
    }

    static give_time() {
      return Date.now();
    }
}