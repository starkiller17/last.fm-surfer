import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LastFmModule } from '../last-fm/last-fm.module';




@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LastFmModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
