import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'db-custombinding',
  template: `
    <h1>
      Custombinding Works!
    </h1>
    <p>The value of a is : {{a}}</p>
    
  `,
  styles: []
})
export class CustombindingComponent {
  @Input() a:number = 0;

}
