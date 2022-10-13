import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AirlineComponent } from "../feature/airline/airline.component";
import { MatComponent } from "../feature/mat/mat.component";
import { TimelineComponent } from "../feature/timeline/timeline.component";
import { FormComponent } from "../material/form/form.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { GithubUsersComponent } from "./components/github-users/github-users.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "home", component: CarouselComponent },
  { path: "users", component: GithubUsersComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "airline", component: AirlineComponent },
  {
    path: "mat",
    component: MatComponent,
    children: [{ path: "form", component: FormComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
