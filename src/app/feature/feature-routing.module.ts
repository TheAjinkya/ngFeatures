import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "../material/form/form.component";
import { FeatureComponent } from "./feature.component";

const routes: Routes = [
  {
    path: "",
    component: FeatureComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
