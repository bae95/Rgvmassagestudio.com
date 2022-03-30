import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './Modules/services/services.component';
import { AboutComponent } from './Modules/about/about.component';
import { ContactComponent } from './Modules/contact/contact.component';
import { FAQComponent } from './Modules/faq/faq.component';
import { LocationComponent } from './Modules/location/location.component';
import { PagenotfoundComponent } from './Modules/pagenotfound/pagenotfound.component';
const routes: Routes = [

  {path: 'home',
  component: HomeComponent,
 
},
{path: '', redirectTo: 'home', pathMatch: 'full'},
 
    {
    path: 'services',
    component: ServicesComponent
  }, {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'faq',
    component: FAQComponent

  },
  {
    path: 'contact',
    component: ContactComponent

  },
  {
    path: '**',
     component: PagenotfoundComponent


  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [HomeComponent, 
  ServicesComponent, LocationComponent,
  FAQComponent,ContactComponent]