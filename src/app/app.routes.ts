import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { JewleryComponent } from './jewlery/jewlery.component';
import { ElctroComponent } from './elctro/elctro.component';
import { NotfoundComponent } from './notfound/notfound.component';


export const routes: Routes = [
{path:"",redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
    {path:"men's clothing",component:MenComponent},
    {path:"women's clothing",component:WomenComponent},
    {path:"jewelery",component:JewleryComponent},
    {path:"electronics",component:ElctroComponent},

    {path:"**",component:NotfoundComponent}



];
