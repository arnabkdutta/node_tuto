import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FromComponentComponent } from './from-component/from-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { ExtremRightSidebarComponent } from './extrem-right-sidebar/extrem-right-sidebar.component';
import { AfterLoginDivComponent } from './after-login-div/after-login-div.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: FromComponentComponent,
    data: { title: 'Login Page' }
  },
  {
    path: 'home',
    component: ContentComponent,
    data: { title: 'Home Page' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FromComponentComponent,
    NavBarComponent,
    SideNavComponent,
    ContentComponent,
    ExtremRightSidebarComponent,
    AfterLoginDivComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
