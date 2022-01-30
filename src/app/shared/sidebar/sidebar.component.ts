import { Component, OnInit } from '@angular/core';
import { LastFmService } from 'src/app/last-fm/services/last-fm.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor( private lastFmService: LastFmService) { }

  ngOnInit(): void {
  }

}
