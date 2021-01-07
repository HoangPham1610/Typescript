import Shape from "../Shape/Shape";
export default class Rectange extends Shape {
  private width: number;
  private height: number;
  public getWidth(): number {
    return this.width;
  }
  public setWidth(value: number) {
    this.width = value;
  }
  constructor() {
    super();
    console.log("Rectangle");
  }

  public area(): number {
    return this.width * this.height;
  }
}
