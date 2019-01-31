import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() title: string;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  Logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
