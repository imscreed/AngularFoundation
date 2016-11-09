import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'db-eventbinding',
  template: `
    <h1>
      Event Binding
    </h1>
    <p>
    <button (click)="callAlert()">Click me!</button>
    <button (click)="onEmitEvent()">Call Event Binding</button>
</p>
  `,
  styles: []
})
export class EventbindingComponent {

 callAlert(){
   alert("Thank you for clicking, Alhamdhulillah!")
 }

 @Output() emitEvent = new EventEmitter<string>();

  onEmitEvent(){
    this.emitEvent.emit("Passing string on button click");
  }

}
