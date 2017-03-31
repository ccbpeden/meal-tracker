export class Meal {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  public dateTime:string = this.year + "/" + this.month + "/" + this.day;
  constructor(public name:string, public details:string, public calories:number) { }
}
