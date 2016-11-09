import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  somestring = "some string";
  numberInterpolation = 2;

  isEnabled(){
    return true;
  }
  displayEvent(eventValue: string) {
    alert(eventValue);
  }

}
