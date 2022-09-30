import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineComponent } from '../feature/timeline/timeline.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
{path:'home', component:CarouselComponent},
{path:'users', component:GithubUsersComponent},
{path:'timeline', component:TimelineComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
