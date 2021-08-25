import { Component } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
    <h1>Feature's child route</h1>
    <ul>
      <li><a routerLink="../">Go back to children's home route</a></li>
    </ul>
  `,
  styles: [`
  :host {
    display: block;
    margin: 20px;
    border: 1px solid lightblue;
  }
  h1 {
    text-align: center;
    font-size: 24px;
  }`
]
})
export class ChildComponent {
}
