import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { GoTopButtonModule } from 'ng2-go-top-button';

import { AppComponent } from './app.component';
import { DownloadAppButtonComponent } from './components/download-app-button/download-app-button.component';
import { Block1Component } from './components/block1/block1.component';
import { Block2Component } from './components/block2/block2.component';
import { HomeComponent } from './components/home/home.component';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { ChangelogService } from './services/changelog.service';
import { DownloadAppService } from './services/download-app.service';
import { Http404Component } from './components/http404/http404.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    DownloadAppButtonComponent,
    Block1Component,
    HomeComponent,
    ChangelogComponent,
    Block2Component,
    Http404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    GoTopButtonModule,
	
	FontAwesomeModule,

    RouterModule.forRoot( [
      {path: '', component: HomeComponent},
      {path: 'changelog', component: ChangelogComponent},
      {path: '404', component: Http404Component, pathMatch: 'full'},
      {path: '**', redirectTo: '/404'}
    ])

  ],
  providers: [ChangelogService, DownloadAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
