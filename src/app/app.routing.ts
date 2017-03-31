import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactDevComponent } from './contact-dev/contact-dev.component';
import { AboutSiteComponent } from './about-site/about-site.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'contact',
    component: ContactDevComponent
  },
  {
    path: 'about',
    component: AboutSiteComponent
  },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
