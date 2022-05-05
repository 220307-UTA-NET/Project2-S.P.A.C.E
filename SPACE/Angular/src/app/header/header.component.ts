import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  drop:boolean = false;
  Open()
  {
    if(this.drop == true)
    {
      this.drop = false;
    }
    else if(this.drop == false)
    {
      this.drop = true;
    }
  }
}