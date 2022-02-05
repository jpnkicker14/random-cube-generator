import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  form: { start: number, end: number };
  showBaseNumber = false;
  showCrib = true;
  cubeNumber: number;
  baseNumber: number;
  dataSource = new CubedDataSource();
  displayedColumns: string[] = ['base', 'cubed'];

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

interface CubeItem {
  base: number,
  cubed: number
}

class CubedDataSource extends DataSource<CubeItem> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<CubeItem[]>([
    ...[...Array(10).keys()].map((i: number) => {
      return {base: i, cubed: Math.pow(i, 3)}
    })

  ]);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CubeItem[]> {
    return this.data;
  }

  disconnect() {
  }
}
