import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  //data passed from prev modal
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

  //dismiss modal
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
