import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'db-twowaybinding',
  template: `
<h1>
Two Way data binding
</h1>
    <input type="text" [(ngModel)]="a">You have entered: {{a}}

  `,
  styles: []
})
export class TwowaybindingComponent {
  a = 2;

}
