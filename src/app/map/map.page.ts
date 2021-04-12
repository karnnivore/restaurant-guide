import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  //data passed from prev modal
  @Input() name: string;
  @Input() rating: number;
  @Input() tags: string[];
  @Input() image: string;

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  //marker code
  infoWindows: any = [];
  markers: any = {
  };

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.markers = {
      title: this.name,
      latitude: -17.824858,
      longitude: 31.053028
    }
  }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
      let position = new google.maps.LatLng(markers.latitude, markers.longitude)
      let mapMarker = new google.maps.Marker({
        position: position,
        title: markers.title,
        latitude: markers.latitude,
        longitude: markers.longitude
      })

      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker)
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div>' + 
                            '<h2 id="firstHeading" class="firstHeading content" style="color: black">' + marker.title + '</h2>' +
                            '<p class="content" style="color: black">Latitude: ' + marker.latitude + '</p>' + 
                            '<p class="content" style="color: black">Longitude: ' + marker.longitude + '</p>' +
                            '</div>';
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    })

    marker.addListener('click', () => {
      this.closeAllInfoWindows()
      infoWindow.open(this.map, marker);
    })
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close()
    }
  }

  //display new map
  showMap() {
    const location = new google.maps.LatLng(-17.824858, 31.053028);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers)
  }
  //dismiss modal
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

}
