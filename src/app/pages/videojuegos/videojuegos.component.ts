import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent {

}
