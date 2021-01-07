import Shape from "../Shape/Shape";

class Square extends Shape {
  public getWidth(): number {
    throw new Error("Method not implemented.");
  }
  public setWidth(value: number): void {
    throw new Error("Method not implemented.");
  }
  protected area(): number {
    throw new Error("Method not implemented.");
  }
}
