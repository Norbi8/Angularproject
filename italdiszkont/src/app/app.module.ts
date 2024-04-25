import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    //provideFirebaseApp(() => initializeApp({"projectId":"italdiszkont-afc3a","appId":"1:975238435836:web:635ae04264f694253b5879","storageBucket":"italdiszkont-afc3a.appspot.com","apiKey":"AIzaSyDlPdWLxGKRvCDnS77MLXNLoZabKHbQSg8","authDomain":"italdiszkont-afc3a.firebaseapp.com","messagingSenderId":"975238435836","measurementId":"G-ECPKYTWLDN"}))
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
