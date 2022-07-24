import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'proyecto1';
  ngAfterViewInit():void{
   const btnRed= document.querySelector('#red');
   const btnBlue=document.querySelector('#blue');
   const btnGreen=document.querySelector('#green');
   const textToChange:HTMLElement= document.querySelector('#acciones p')!;
   btnRed?.addEventListener('click',()=>{
     textToChange.style.backgroundColor='red';
   })
   btnBlue?.addEventListener('click',()=>{
    textToChange.style.backgroundColor='blue'
   })
   btnGreen?.addEventListener('click',()=>{
    textToChange.style.backgroundColor='green';
   })
    
  }
}
