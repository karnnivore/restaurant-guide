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
        'rating' : 4,
        'description' : 'The best pizza in town',
        'tags' : ['Italian', 'Pizza']
      }
    })
    return await modal.present()
  }

  async presentRajmahal() {
    const modal = await this.modalController.create({
      component: DetailsModalPage,
      cssClass: 'customModal',
      componentProps: {
        'name': 'Rajmahal',
        'address': '241 Yonge St.',
        'rating' : 4,
        'description' : 'Really great indian food',
        'tags' : ['Indian', 'Roti']
      }
    })
    return await modal.present()
  }

  async presentThai() {
    const modal = await this.modalController.create({
      component: DetailsModalPage,
      cssClass: 'customModal',
      componentProps: {
        'name': 'Thai Palace',
        'address': '573 College St.',
        'rating' : 4,
        'description' : 'The best Pad Thai',
        'tags' : ['Thai', 'Pad Thai']
      }
    })
    return await modal.present()
  }

  async presentChez() {
    const modal = await this.modalController.create({
      component: DetailsModalPage,
      cssClass: 'customModal',
      componentProps: {
        'name': 'Chez Paris',
        'address': '273 Church St.',
        'rating' : 4,
        'description' : 'Bon apetit, great french food',
        'tags' : ['French', 'Gourmet']
      }
    })
    return await modal.present()
  }

}
