import { Component } from '@angular/core';
import { faHouse, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent {
  faHouse = faHouse;
  faPhoneAlt = faPhone;
  faClock = faClock;
}
