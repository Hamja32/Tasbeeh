import { Component, HostListener } from '@angular/core';    //hostlistener or component ko import krna
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
// import { ViewEncapsulation } from '@angular/core';

// class abc{
//   constructor(){
//     console.log("abc constructer called");
//   }
//   showName(){
//     console.log("My name is hamza of showName function");
//   }
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
//  encapsulation:ViewEncapsulation.ShadowDom
})

export class AppComponent {
  title = 'hello-world';
  number:number = 1
  isTasbeehCompleted : boolean = false
  // logout(){
  //   this.isUserLogIn = false;
  // }
  // login(){
  //   this.isUserLogIn = true;
  // }

  counter(){
   this.number+=1;
   if(this.number==100){
    this.isTasbeehCompleted = true
   }
  }
  reset(){
    this.number = 0;
  }
  
}
