import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { MonsterCardComponent } from 'halloween-ui';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MonsterCardComponent],
})
export class Tab1Page {
  constructor() {}

  mostrarAlerta() {
    alert('Bienvenido a mi castillo... si te atreves!');
  }
}
