import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string='';
  num2:string='';
  resultado:number=0;
  calculo:string=''

  calcular():void{
    switch(this.calculo){
      case 'suma':this.resultado=parseInt(this.num1)+parseInt(this.num2); break;
      case 'resta':this.resultado=parseInt(this.num1)-parseInt(this.num2); break;
      case 'mult':this.resultado=parseInt(this.num1)*parseInt(this.num2); break;
      case 'divi':this.resultado=parseInt(this.num1)/parseInt(this.num2); break;
    }
  
  }
}
