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
        'image' : "assets/toronto-food-one-night-only-pizza-grating-1-368x0-c-default.jpg",
        'rating' : 2,
        'description' : 'The best pizza in town',
        'tags' : ['Italian', 'Pizza'],
        'latitude': 43.6640072,
        'longitude': -79.3847037
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
        'image': "assets/Roti food.jpg",
        'rating' : 3,
        'description' : 'Really great indian food',
        'tags' : ['Indian', 'Roti'],
        'latitude': 43.6592868,
        'longitude': -79.4062472
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
        'image': "assets/thai food.jpg",
        'rating' : 3,
        'description' : 'The best Pad Thai',
        'tags' : ['Thai', 'Pad Thai'],
        'latitude' : 43.6552962,
        'longitude': -79.3938433
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
        'image': "assets/fancy french.jpg",
        'rating' : 4,
        'description' : 'Bon apetit, great french food',
        'tags' : ['French', 'Gourmet'],
        'latitude': 43.6553266,
        'longitude': -79.3938433
      }
    })
    return await modal.present()
  }

}
