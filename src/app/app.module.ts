import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';
import { TerritoryComponent } from './components/territory/territory.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { AddTerrtoryPopupComponent } from './components/add-terrtory-popup/add-terrtory-popup.component';
import { CompleteTerrtoryPopupComponent } from './components/complete-terrtory-popup/complete-terrtory-popup.component';
import { EditPopupComponent } from './components/edit-popup/edit-popup.component';
import { DetailsPopupComponent } from './components/details-popup/details-popup.component';
import { DeletePublisherPopupComponent } from './components/delete-publisher-popup/delete-publisher-popup.component';
import { AssignToPublisherPopupComponent } from './components/assign-to-publisher-popup/assign-to-publisher-popup.component';

const firebaseConfig = {
  apiKey: "AIzaSyANXxiNezN7C2nbii7lITb6BiMywR3Pnt8",
  authDomain: "tmanager-f82a0.firebaseapp.com",
  projectId: "tmanager-f82a0",
  storageBucket: "tmanager-f82a0.appspot.com",
  messagingSenderId: "527665683669",
  appId: "1:527665683669:web:73059c97011a7de289165c"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    TerritoryComponent,
    PublisherComponent,
    AddTerrtoryPopupComponent,
    CompleteTerrtoryPopupComponent,
    EditPopupComponent,
    DetailsPopupComponent,
    DeletePublisherPopupComponent,
    AssignToPublisherPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // for firestore
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
