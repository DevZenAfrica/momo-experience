import {AfterViewInit, Component, ElementRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {GoogleMap, MapGeocoder, MapGeocoderResponse, MapInfoWindow, MapMarker} from '@angular/google-maps';
import {PartnerService} from '../../services/partner.service';
import {ActivatedRoute} from '@angular/router';
import {Partner} from "../../models/partner";

@Component({
  selector: 'app-map-partner',
  templateUrl: './map-partner.component.html',
  styleUrls: ['./map-partner.component.scss'],
})
export class MapPartnerComponent implements OnInit, AfterViewInit {

  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild('myGoogleMap', { static: false })
  map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info: MapInfoWindow;

  address = '';
  latitude = 4.0489823;
  longitude = 9.6980028;
  zoom = 20;

  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
  };
  markers = [] as any;

  categorieSelect = '';
  infoContent = '';


  constructor(private ngZone: NgZone, private geoCoder: MapGeocoder, private partnerService: PartnerService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.category) { this.categorieSelect = this.route.snapshot.queryParams.category; }
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // Set marker position
      this.setMarkerPosition(this.latitude, this.longitude);

      // Add positions shop
      this.partnerService.getPartner().then(
        (docRef) => {
          const pointe = this;
          docRef.forEach(function(data) {
            if(pointe.categorieSelect === '' || data.idCategoryPartner === pointe.categorieSelect) {
              pointe.addPositionShop(data.lat, data.long, data.logoPins, data.name, data);
            }
          });
        }
      );
    });
  }

  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    //const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    // Align search box to center
    /*this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        const place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log({ place }, place.geometry.location?.lat());

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();

        // Set marker position
        this.setMarkerPosition(this.latitude, this.longitude);

        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
      });
    });*/
  }

  addPositionShop(latd: number, long: number, icone: string, titre: string, data: any) {
    this.markers.push(
      {
        position: {
          lat: latd,
          lng: long,
        },
        dataElement: data,
        options: {
          animation: google.maps.Animation.BOUNCE,
          draggable: true,
          clickable: true,
          icon: { url : icone, scaledSize: new google.maps.Size(40, 40)},
          title: titre
        },
      }
    );
  }

  openInfo(marker: MapMarker, content: Partner) {
    this.infoContent = '<div class="flex items-center space-x-4 py-2 px-2">\n' +
      '                    <div class="flex-shrink-0">\n' +
      '                        <img class="w-8 h-8 rounded-full" src="' + content.logo + '" alt="Neil image">\n' +
      '                    </div>\n' +
      '                    <div class="flex-1 min-w-0">\n' +
      '                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">\n' +
      '                            ' + content.name + '\n' +
      '                        </p>\n' +
      '                        <a href="preview-partner/' + content.id + '" class="text-sm text-gray-500 truncate dark:text-gray-400">\n' +
      '                            open\n' +
      '                        </a>\n' +
      '                    </div>\n' +
      '                </div>';
    this.info.open(marker);
  }

  setMarkerPosition(latitude: any, longitude: any) {
    // Set marker position
    this.markers = [
      {
        position: {
          lat: latitude,
          lng: longitude,
        },
        options: {
          animation: google.maps.Animation.DROP,
          draggable: true
        },
      },
    ];
  }

  eventHandler(event: any, name: string) {
    // console.log(event, name);

    switch (name) {
      case 'mapDblclick': // Add marker on double click event
        break;

      case 'mapDragMarker':
        break;

      case 'mapDragend':
        this.getAddress(event.latLng.lat(), event.latLng.lng());
        break;

      default:
        break;
    }
  }

  getAddress(latitude: any, longitude: any) {
    this.geoCoder
      .geocode({ location: { lat: latitude, lng: longitude } })
      .subscribe((addr: MapGeocoderResponse) => {
        if (addr.status === 'OK') {
          if (addr.results[0]) {
            this.zoom = 12;
            this.address = addr.results[0].formatted_address;
          } else {
            this.address = null;
          }
        } else {
          this.address = null;
        }
      });
  }

}
