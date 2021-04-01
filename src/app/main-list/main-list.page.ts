import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalPage } from '../details-modal/details-modal.page';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.page.html',
  styleUrls: ['./main-list.page.scss'],
})
export class MainListPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailsModalPage,
      cssClass: 'customModal',
      componentProps: {
        'name': 'Tony\'s Pizza',
        'address': '123 Fake St.',
        'rating' : 5,
        'description' : 'The best pizza in town',
        'tags' : ['Italian', 'Pizza']
      }
    })
    return await modal.present()
  }

}
