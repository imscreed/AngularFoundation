import {Component, OnInit, DoCheck, OnDestroy, AfterViewChecked, ViewChild} from '@angular/core';
import {init} from "protractor/built/launcher";

@Component({
  selector: 'app-lifecycle',
  template: `
<h1>
Lifecycle component
</h1>
<p>Template local reference | Local Variable that can be created inside of a DOM element using #</p>
Here a paragraph with local reference #name is assigned a value <p #name>Mohammed</p>
<p>This can be accessed by using ViewChild metadata by the component and by using the same local reference as ViewChild('name')</p>
<button (click)="changeName()">Change Name</button> The change occurs by using the DOM element's textContent property
<p>Changed {{name.textContent}} to {{changedName}}</p>
<p>Similar local reference can be done with ng-content using ContentChild('by passing the reference of the DOM element passing the content to the component')</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, DoCheck, OnDestroy, AfterViewChecked {

  @ViewChild('name')
  name: HTMLElement;
  private changedName;


  changeName(){
    this.changedName = this.name.textContent = 'Ibrahim';
  }

  constructor() { }

  ngOnInit() {
    this.log("OnInit");
  }

  ngDoCheck(){
    this.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    this.log("ngOnDestroy");
  }

  ngAfterViewChecked(): void {
    this.log("ngAfterViewChecked");
    console.log(this.name);
  }

  private log(message: string): void{
    console.log(message);
}

}
