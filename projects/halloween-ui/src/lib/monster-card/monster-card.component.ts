import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  imports: [],
  templateUrl: './monster-card.component.html',
  styleUrl: './monster-card.component.scss',
})
export class MonsterCardComponent {
  // Datos que cambian desde la página que usa la tarjeta
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() texto: string = '';
  @Input() textoBoton: string = 'Ver más';

  // Avisa a la página de que se ha pulsado el botón
  @Output() botonPulsado = new EventEmitter<void>();

  pulsarBoton() {
    this.botonPulsado.emit();
  }
}
