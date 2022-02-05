import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  form: { start: number, end: number };
  showBaseNumber: boolean;
  cubeNumber: number;
  baseNumber: number;

  constructor() {
    this.form = {start: 10, end: 99};
    this.showBaseNumber = false;
    this.cubeNumber = 0;
    this.baseNumber = 0;
  }

  ngOnInit() {
    this.setRandomCube()
  }

  setRandomCube(): void {
    this.showBaseNumber = false;
    this.baseNumber = this.generateRandomNumber(this.form.start, this.form.end)
    this.cubeNumber = this.toCube(this.baseNumber);
  }

  revealNumber(): void {
    this.showBaseNumber = true;
  }

  private toCube(baseNumber: number): number {
    return Math.pow(baseNumber, 3);
  }

  private generateRandomNumber(min: number = 0, max: number = 1): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
