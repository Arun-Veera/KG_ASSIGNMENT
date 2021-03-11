import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from './views/home/home.component';
import { AppointmentComponent } from './views/appointment/appointment.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {A11yModule} from '@angular/cdk/a11y';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {  ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppointmentComponent,
    NavbarComponent, 
    ProfileComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,  
    MatFormFieldModule,
    MatDatepickerModule,
    A11yModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [DataService],
  schemas:[ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
