import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]  },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'hero/:id', component : HeroDetailComponent,  canActivate: [AuthGuard]  },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent}
  // { path : '**', component: };
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
