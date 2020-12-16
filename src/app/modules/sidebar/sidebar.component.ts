import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  icons = [
    {
      "name": "Detail",
      "icon": 'icon-deals'
    },
    {
      "name": "Contract",
      "icon": 'icon-contacts11'
    },
    {
      'name': 'Companies',
      'icon': 'icon-companies'
    },
    {
      'name': 'Product',
      'icon': 'icon-products'
    },
    {
      'name': 'Activity',
      'icon': 'icon-activities'
    },
    {
      "name": "Dashboards",
      "icon": "icon-dashboards"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
