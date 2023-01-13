import { Component } from '@angular/core';
import { faUser , faServer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faUser = faUser;
  faServer = faServer;
}
