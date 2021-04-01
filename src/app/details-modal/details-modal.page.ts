import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.page.html',
  styleUrls: ['./details-modal.page.scss'],
})
export class DetailsModalPage implements OnInit {

  //data passed by componentProps
  @Input() name: string;
  @Input() address: string;
  @Input() rating: number;
  @Input() description: string;
  @Input() tags: string[];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }
}
