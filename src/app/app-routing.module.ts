import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component'
import { LoginComponent } from './login/login.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { InputPageComponent } from './input-page/input-page.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { ResultPageComponent } from './result-page/result-page.component';


const routes: Routes = [
  {path: 'userpanel', component: UserPanelComponent, children: [
    {path: 'guide', component: UserGuideComponent},
    {path: 'input', component: InputPageComponent},
    {path: 'user', component: UserPortfolioComponent},
    {path: 'result', component: ResultPageComponent},
  ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
