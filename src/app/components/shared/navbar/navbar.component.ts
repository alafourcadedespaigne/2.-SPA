import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  buscarHeroes(texto:string){

      console.log(texto);

  }

}
