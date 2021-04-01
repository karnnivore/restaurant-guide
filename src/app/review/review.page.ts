import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  //data passed from prev modal
  @Input() name: string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  //dismiss modal
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
