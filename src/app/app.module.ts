import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {ListUsersComponent} from './components/list-users/list-users.component';
import {UserService} from './services/user.service';

const appRoutes: Routes = [
  {path: 'add', component: UserComponent},
  {path: 'users', component: ListUsersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
