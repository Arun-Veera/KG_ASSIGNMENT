import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  image = "https://i.pravatar.cc/";
  currentDate = new Date().toLocaleDateString()
  constructor(private route: Router) { }

  routeToAppointment() {
    console.log("inside router")
    this.route.navigateByUrl('appointment')
  }
  ngOnInit(): void {
  }

}
