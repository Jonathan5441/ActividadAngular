import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  filtromayor=0
  filtromenor=100
  videojuegos=[
    {id:1,titulo:'Valorant',precio:'10',imagen:"https://img.asmedia.epimg.net/resizer/v2/Y2EVPJQQOVJMXKLORMNZ5HDVHM.jpg?auth=1bceea24d3597b9afd7ab28ffc262afc31e9dd84ca9bc29bb4c9ff49912916a0&width=1200&height=1200&smart=true"},
    {id:2,titulo:'Mortal kombat 11',precio:'60',imagen:"https://image.api.playstation.com/vulcan/ap/rnd/202009/0123/bF1qmEL5RM6aMfL0oLcxRe8B.png"},
    {id:3,titulo:'God of war',precio:'50',imagen:"https://images.cdn3.buscalibre.com/fit-in/360x360/a8/24/a82494790f85450a2d5cb2137b3a4e87.jpg"},
    {id:4,titulo:'Horizon zero dawn',precio:'80',imagen:"https://ecuadorjuegosdigitales.com/wp-content/uploads/2022/10/1539745931-horizon-zero-dawn-complete-edition-ps4-primaria.jpg"},
    {id:5,titulo:'The evil within',precio:'30',imagen:"https://media.vandal.net/m/20974/the-evil-within-2014214155352_1.jpg"}
  ]
}
