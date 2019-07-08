export class Todo {
  public id: number = 0;
  public name: string = "";
  public isSelected: boolean = false;
  constructor(id: number, name: string) {
    this.id = ++id;
    this.name = name;
  }
}
