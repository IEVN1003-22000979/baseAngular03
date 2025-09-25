import { Component } from '@angular/core';
import { colores } from './colores';

@Component({
  selector: 'app-colores',
  standalone: false,
  templateUrl: './colores.component.html',
  styleUrl: './colores.component.css'
})
export class ColoresComponent {
   digitsColors = [
    { name: 'Negro', digit: 0, color: '#000', textColor: '#fff' },
    { name: 'Café', digit: 1, color: '#6f4e37', textColor: '#fff' },
    { name: 'Rojo', digit: 2, color: '#f00', textColor: '#fff' },
    { name: 'Naranja', digit: 3, color: '#fa0', textColor: '#000' },
    { name: 'Amarillo', digit: 4, color: '#ff0', textColor: '#000' },
    { name: 'Verde', digit: 5, color: '#080', textColor: '#fff' },
    { name: 'Azul', digit: 6, color: '#00f', textColor: '#fff' },
    { name: 'Morado', digit: 7, color: '#608', textColor: '#fff' },
    { name: 'Gris', digit: 8, color: '#888', textColor: '#fff' },
    { name: 'Blanco', digit: 9, color: '#fff', textColor: '#000' },
  ];

  multiplierColors = [
    { name: '×1 (Negro)', multiplier: 1, color: '#000', textColor: '#fff' },
    { name: '×10 (Café)', multiplier: 10, color: '#6f4e37', textColor: '#fff' },
    { name: '×100 (Rojo)', multiplier: 100, color: '#f00', textColor: '#fff' },
    { name: '×1k (Naranja)', multiplier: 1000, color: '#fa0', textColor: '#000' },
    { name: '×10k (Amarillo)', multiplier: 10000, color: '#ff0', textColor: '#000' },
    { name: '×100k (Verde)', multiplier: 100000, color: '#080', textColor: '#fff' },
    { name: '×1M (Azul)', multiplier: 1000000, color: '#00f', textColor: '#fff' },
    { name: '×10M (Morado)', multiplier: 10000000, color: '#608', textColor: '#fff' },
    { name: '×0.1 (Dorado)', multiplier: 0.1, color: '#d4af37', textColor: '#000' },
    { name: '×0.01 (Plata)', multiplier: 0.01, color: '#c0c0c0', textColor: '#000' },
  ];

  toleranceOptions = [
    { name: 'Dorado', percent: 5, color: '#d4af37', textColor: '#000' },
    { name: 'Plata', percent: 10, color: '#c0c0c0', textColor: '#000' },
  ];

  band1 = this.digitsColors[3]; // Naranja
  band2 = this.digitsColors[7]; // Morado
  band3 = this.multiplierColors[1]; // Café (×10)
  tolerance = this.toleranceOptions[0]; // Dorado (5%)

  valueDisplay: string | null = null;
  maxDisplay: string | null = null;
  minDisplay: string | null = null;

  constructor() {
    this.calculate();
  }

  calculate(): void {
    if (!this.band1 || !this.band2 || !this.band3 || !this.tolerance) {
      this.valueDisplay = this.maxDisplay = this.minDisplay = null;
      return;
    }

    const result = colores.calculate(
      this.band1.digit,
      this.band2.digit,
      this.band3.multiplier,
      this.tolerance.percent
    );

    this.valueDisplay = result.nominal.toString();
    this.maxDisplay = result.max.toString();
    this.minDisplay = result.min.toString();
  }
}

