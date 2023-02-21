import { Component } from '@angular/core';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    alerta():void{
        confirm("estas seguro que quieres cerrar sesion, ya no podras ingresar al juego en progreso") && 
        alert("has cerrado sesion");
    }
}
