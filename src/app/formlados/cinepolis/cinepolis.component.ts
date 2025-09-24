import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  hola:string='';
  cantBol:string='';
  resultado2:string='';
  card:boolean=false;
  blimite:number=0
  cantPer: string='';

  

  procesar():void{
    const compradores = parseInt(this.cantPer) ;
    this.blimite= compradores * 7;

    const resultado = parseInt(this.resultado2);
    
    
    if(parseInt(this.cantBol) > this.blimite){
      this.resultado2 = "- no se pueden comprar más de 7 boletos por persona"
    }
    if(parseInt(this.cantBol) > 5 && parseInt(this.cantBol) <= 7){
      if(this.card == false){
        this.resultado = parseInt(this.cantBol) * 12;
        this.resultado = this.resultado *0.85;
      }
      else{
        this.resultado = parseInt(this.cantBol) * 12;
        this.resultado = this.resultado *0.75;
      }
    }

    if(parseInt(this.cantBol) <= 5 && parseInt(this.cantBol) >= 3){
      if(this.card == false){
        this.resultado = parseInt(this.cantBol)*12;
        this.resultado = this.resultado*0.90
      }
      else{
        this.resultado = parseInt(this.cantBol)*12;
        this.resultado = this.resultado*0.80
      }
  }

  if(parseInt(this.cantBol) <= 2){
    if(this.card == false){
      this.resultado = parseInt(this.cantBol)*12;
    }
    else{
      this.resultado = parseInt(this.cantBol)*12;
      this.resultado = this.resultado*0.90
    }
  }


  }
}
