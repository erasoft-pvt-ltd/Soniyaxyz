import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { OurServices } from './components/our-services/our-services';
import { OurCustomer } from './components/our-customer/our-customer';
import { Career } from './components/career/career';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Login } from './components/login/login';
import { Jobs } from './components/jobs/jobs';
import { CreateJobs } from './components/create-jobs/create-jobs';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path:"home",
        component:Home
    },
    {
        path:"about",
        component:About
    },
    {
        path:"our-services",
        component:OurServices
    },
    {
        path:"our-customers",
        component:OurCustomer
    },
    {
        path:"career",
        component:Career
    },
    {
        path:"gallery",
        component:Gallery
    },
    {
        path:"contact",
        component:Contact
    },
    {
        path:"admin/login",
        component:Login
    },
    {
        path:"admin/jobs",
        component:Jobs
    },
    {
        path:"admin/create-jobs",
        component:CreateJobs
    },
    { path: '**', component: PageNotFound }, // 404 fallback

];
