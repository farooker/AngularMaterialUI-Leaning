import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
// import { StoreRxModule} from './store/store-rx.module';
// import { StateModule } from './store/state.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    PagesModule,
    // StateModule
    // StoreRxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
