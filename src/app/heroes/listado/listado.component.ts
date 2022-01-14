import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {
heroes:string [] = ['Spiderman','Ironman','Hulk','Thor','Capitan America']; 
heroDeleted:string = ""

deleteHeroe(){
  this.heroDeleted = this.heroes.pop() || '';
}
isAnyHeroDeleted():boolean{
  return this.heroDeleted.length > 0
}
}
