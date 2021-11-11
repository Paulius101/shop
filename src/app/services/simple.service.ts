import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  constructor() {
  }

  public addNumbers(a: number, b: number): number {
    return a + b;
  }

  public isNumberEven(x: number): boolean {
    return x % 2 === 0;
  }
}