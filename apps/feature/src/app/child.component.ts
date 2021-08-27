import { Component } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
    <h1>Feature's child route</h1>
    <a routerLink="../">Go back to children's home route</a>
  `,
  styles: [`
    :host {
    display: block;
    height: 100%;
    padding: 50px;
    background:  lightblue;
  }
  h1 {
    text-align: center;
    font-size: 24px;
  }`
]
})
export class ChildComponent {
}
