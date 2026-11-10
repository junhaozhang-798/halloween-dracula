import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent],
})
export class Tab2Page {
  constructor() {}

  mostrarAlerta(mensaje: string) {
    alert(mensaje);
  }
}