export class Todo {
  id: number;
  name: string = "";
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
