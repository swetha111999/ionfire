import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  
{path:"",redirectTo:"login",pathMatch:"full"},  
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then(m => m.RegisterPageModule)
  },
  { path: "idealist", loadChildren:()=>import( "./idea-list/idea-list.module").then(m=> m.IdeaListPageModule) },
  { path: "idea", loadChildren:()=>import( "./idea-details/idea-details.module").then(m=> m.IdeaDetailsPageModule) },
  { path: "idea/:id", loadChildren:()=>import( "./idea-details/idea-details.module").then(m=> m.IdeaDetailsPageModule) },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
