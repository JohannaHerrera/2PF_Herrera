import { Component } from '@angular/core';
import Links from '../core/models/Links';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  routerLinks = Links;
}
