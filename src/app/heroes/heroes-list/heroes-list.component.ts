import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'

})
export class HeroesListComponent {

  imageWidth:number=80;
  imageMargin:number=2;
  mostrarImage:boolean=true;
  listFilter:string='';

  showImages():void{
    this.mostrarImage=!this.mostrarImage;
  }
  
  heroes:any[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      poder:"Kame Hamen Ha",
      Raza: "Saiyan",
      Ki: 9000000000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      poder:"Final Flash",
      Raza: "Saiyan",
      Ki: 19840000
    },
    {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Picolo",
      poder:"Makankosapo",
      Raza: "Namekiano",
      Ki: 50000000
    },
    {
      imagen:"https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Freezer",
      poder:"Death Ball",
      Raza: "Alien",
      Ki: 9500
    },
  ]

}
