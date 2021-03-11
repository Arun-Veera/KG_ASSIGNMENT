import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  patients: any[] = [{
    "name": "Sathiya",
    "contact": "9751339116",
    "appointment": "05:10 PM",
    "waited": "56 Min",
    "age": "Male 32yr",
    "image": "https://i.pravatar.cc/150?img=64",
    "status": "queu"
  },{
    "name": "Arun",
    "contact": "9994494436",
    "appointment": "06:00 PM",
    "waited": "15 Min",
    "age": "Male 45yr",
    "image": "https://i.pravatar.cc/150?img=64",
    "status": "queu"
  },{
    "name": "Emma",
    "contact": "9489072273",
    "appointment": "09:10 PM",
    "waited": "10 Min",
    "age": "Female 27yr",
    "image": "https://i.pravatar.cc/150?img=64",
    "status": "queu"
  },{
    "name": "Sufiya",
    "contact": "7598447472",
    "appointment": "10:10 PM",
    "waited": "05 Min",
    "age": "Femle 28yr",
    "image": "https://i.pravatar.cc/150?img=64",
    "status": "queu"
  },{
    "name": "Sathiyaseelan",
    "contact": "9751339116",
    "appointment": "07:43 PM",
    "waited": "10Mins",
    "age": "23, Male",
    "image": "https://i.pravatar.cc/150?img=64",
    "status": "queu"
  },{
    "name": "Sathiyaseelan",
    "contact": "9751339116",
    "appointment": "07:43 PM",
    "waited": "10Mins",
    "age": "44, Male",
    "image": "https://i.pravatar.cc/150?img=64",
    "status": "queu"
  }];

  breadCrumpList = [
    {name: "Home", route: '/home'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
