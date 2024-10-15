import { Component } from '@angular/core';

@Component({
  selector: 'counter-component',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 0;
  }
}
