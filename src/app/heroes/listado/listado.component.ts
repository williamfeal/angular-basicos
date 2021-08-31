import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';
  
  borrarHeroe(){
    // lo puedes inicializar
    // this.heroes = [];
    // this.heroes.slice
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
    //this.heroeBorrado = this.heroeBorrado +' '+  heroeBorrado;
    //heroeBorrado = 'hola';
    //console.log(heroeBorrado);
}
}
