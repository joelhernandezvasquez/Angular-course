
import {Component} from '@angular/core';

@Component({
    selector:'app-counter',
    template:`
     <h1>{{title}}</h1>
    <h3>The Base is:<strong>{{base}}</strong></h3>

    <button (click) = "increment(base)">+{{base}}</button>

    <span>{{base}}</span>

    <button (click) = "decrement(-base)">-{{base}}</button>

    <button (click) = "incrementByValue(5)">Increment by Value</button>
    `
})
export class CounterComponent{
    title:string = 'App Counter';
    counter:number = 10;
    base:number = 5;

    increment = (base:number):void=>{
      this.base+=5;
    }

    incrementByValue = (value:number):void =>{
      this.counter += value;
    }

    decrement = (base:number):void =>{
      this.base-=5;
    }
}