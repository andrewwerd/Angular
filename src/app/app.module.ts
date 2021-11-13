import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeRegistrar } from '@utils';
const routes: Routes = [
  // {
  //   path: 'requestaccess',
  //   loadChildren: () => import('app/pages/request-access/request-access.module').then(m => m.RequestAccessModule),
  //   data: { title: 'Request Access' }
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('app/pages/login/login.module').then(m => m.LoginModule)
  // },
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
    data: { title: '404 - Page not found' }
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    FontAwesomeRegistrar.register(library);
  }
}
