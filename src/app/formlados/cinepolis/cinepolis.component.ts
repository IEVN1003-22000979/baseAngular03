import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

hola: string = '';
cantPer: number = 0;
cantBol: number = 0;
card: boolean = false;
resultado: number = 0;
errorMessage: string = '';

costoBoleto: number = 12;
maxBoletosPorPersona: number = 7;

procesar() {
  const totalBoletos = this.cantBol;
  const maxBoletosPermitidos = this.cantPer * this.maxBoletosPorPersona;

  if (totalBoletos > maxBoletosPermitidos) {
    this.errorMessage = `No pueden comprar más de ${this.maxBoletosPorPersona} boletos por persona (máximo ${maxBoletosPermitidos} boletos en total).`;
    this.resultado = 0;
    return;
  }

  this.errorMessage = '';

  const precioTotal = totalBoletos * this.costoBoleto;

  let descuento = 0;

  if (this.cantBol > 5) {
    descuento = 0.15;
  } else if (this.cantBol >= 3) {
    descuento = 0.10;
  } else {
    descuento = 0;
  }

  if (this.card) {
    this.resultado = precioTotal * (1 - descuento)*.9;
  }
  else{
    this.resultado = precioTotal * (1 - descuento);

  }
  
  }
}

