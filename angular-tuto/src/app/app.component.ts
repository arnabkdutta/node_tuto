import { Component ,OnInit  } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cookieValue = '';
  constructor( private cookieService: CookieService ) { }
  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('isLoggedIn');
    console.log(this.cookieValue);
  }
}
