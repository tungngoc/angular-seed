import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { UserModule }  from './user/user.module';
import { SharedModule } from './shared/shared.module';

 //fake backend 
import { fakeBackendProvider } from './shared/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
  imports: [UserModule,HomeModule,BrowserModule, HttpModule, AppRoutingModule,  SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  },
     fakeBackendProvider,
        MockBackend,
        MockConnection,
        BaseRequestOptions
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
