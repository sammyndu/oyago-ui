import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-security-route-choice',
  templateUrl: './security-route-choice.component.html',
  styleUrls: ['./security-route-choice.component.scss'],
})
export class SecurityRouteChoiceComponent  implements OnInit, ViewWillEnter {

  date!: string;

  constructor() { }

  ngOnInit() {

  }

  ionViewWillEnter(): void {
    this.date =  new Date().toISOString();
  }

}
