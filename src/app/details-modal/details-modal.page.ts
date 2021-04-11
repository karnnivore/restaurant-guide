import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReviewPage } from '../review/review.page';
import { MapPage } from '../map/map.page';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.page.html',
  styleUrls: ['./details-modal.page.scss'],
})
export class DetailsModalPage implements OnInit {

  //data passed by componentProps
  @Input() name: string;
  @Input() address: string;
  @Input() image: string;
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

  

  //show review modal
  async presentReview() {
    const modal = await this.modalController.create({
      component: ReviewPage,
      cssClass: 'customModal',
      componentProps: {
        'name': this.name,
        'image' : this.image

      }
    })
    return await modal.present()
  }

  //show map
  async presentMap() {
    const modal = await this.modalController.create({
      component: MapPage,
      cssClass: 'customModal',
      componentProps: {
        'name': this.name,
        'rating': this.rating,
        'tags' : this.tags,
        'image' : this.image

      }
    })
    return await modal.present()
  }


}
