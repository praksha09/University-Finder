import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{Http,Headers,Response, URLSearchParams, RequestOptions,HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { Component,Input } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { FilterPipe} from './filter.pipe';
// import {LocalStorageService} from '../../node_modules/angular-localstorage';
import {LOCAL_STORAGE, WebStorageService,StorageServiceModule,SESSION_STORAGE} from '../../node_modules/angular-webstorage-service';
import { RatingComponent } from './rating/rating.component';
import { CompareComponent } from './compare/compare.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { MydiscComponent } from './mydisc/mydisc.component';
import { PrivateComponent } from './private/private.component';
import { StateComponent } from './state/state.component';
import { DeemedComponent } from './deemed/deemed.component';
import { CentralComponent } from './central/central.component';
import { Router, CanActivate } from '@angular/router';
import { SimilarComponent } from './similar/similar.component';
import { LogoutComponent } from './logout/logout.component';
import { DataService } from "./data.service";
import { FindComponent } from './find/find.component';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,} from '@angular/material';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorksComponent,
    ContactComponent,
    CategoryComponent,
    SignupComponent,
    LoginComponent,
    DetailsComponent,
    RatingComponent,
    CompareComponent,
    ProfileComponent,
    UserComponent,
    DiscussionComponent,
    MydiscComponent,
    PrivateComponent,
    StateComponent,
    DeemedComponent,
    CentralComponent,
    SimilarComponent,
    LogoutComponent,
    FilterPipe,
    FindComponent
     ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,    
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    StorageServiceModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([ 
      {
        path: '',
        redirectTo: "/login",
        pathMatch: 'full'
      },
      {
      path:'home',
      
      component:HomeComponent
    },
    {
      path:'works',
      component:WorksComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    {
      path:'category',
      component:CategoryComponent
    },
    {
      path:'signup',
      component:SignupComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'details',
      component:DetailsComponent
    },
    {
      path:'rating',
      component:RatingComponent
    },
    {
      path:'compare',
      component:CompareComponent
    },
    {
      path:'profile',
      component:ProfileComponent
    },
    {
      path:'user',
      component:UserComponent
    },
    {
      path:'discussion',
      component:DiscussionComponent
    },
    {
      path:'mydisc',
      component:MydiscComponent
    },
    {
      path:'private',
      component:PrivateComponent
    },
    {
      path:'state',
      component:StateComponent
    },
    {
      path:'deemed',
      component:DeemedComponent
    },
    {
      path:'central',
      component:CentralComponent
    },
    {
      path:'similar',
      component:SimilarComponent
    },
    {
      path:'find',
      component:FindComponent
    },
    {
      path:'logout',
      component:LogoutComponent
    }
  ])

  ],
  providers: [DataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
