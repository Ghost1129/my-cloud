import { Component } from '@angular/core';
import { faUser , faServer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent {
  faUser = faUser;
  faServer = faServer;
}
