import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    DrawerComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    DrawerComponent
  ]
})
export class ComponentsModule { }
