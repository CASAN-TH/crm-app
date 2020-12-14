import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
icon=[
  {
    "name":"Detail",
    "icon": '../../'
  },
  {
    "name":"Contract",
    "icon":"../../../assets/icon/icon_menu/contract.svg"
  },
  {
    "name":"Companies",
    "icon":"../../../assets/icon/icon_menu/companies.svg"
  },
  {
    "name":"Product",
    "icon":"../../../assets/icon/icon_menu/product.svg"
  },
  {
    "name":"Activity",
    "icon":"../../../assets/icon/icon_menu/activity.svg"
  },
  {
    "name":"Dashboards",
    "icon":"../../../assets/icon/icon_menu/dashboard.svg"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
