import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { BlogComponent } from './shared/components/blog/blog.component';
import { BlogDetailComponent } from './shared/components/blog/blogDetail.component';
import { MyWorkComponent } from './shared/components/my-work/my-work.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { MyWorkDetailComponent } from './shared/components/my-work-detail/my-work-detail.component';
import { NewBlogComponent } from './shared/components/blog/newblog.component';
import { MobileAppComponent } from './shared/components/expertise/mobileapp.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', loadChildren: './modules/menu/menu.module#MenuModule' },
    { path: 'profile', component: ProfileComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'work', component: MyWorkComponent },
    { path: 'work/:title', component: MyWorkDetailComponent },
    { path: 'profile/:code=', component: HomeComponent },
    { path: 'post/:id/:title', component: BlogDetailComponent },
    { path: 'post/add', component: NewBlogComponent },
    { path: 'expertise/Mobile-App', component: MobileAppComponent },
    { path: 'expertise/web-design', component: MobileAppComponent },
    { path: 'expertise/web-development', component: MobileAppComponent },
    { path: 'expertise/UI-UX', component: MobileAppComponent },
    { path: 'expertise/product-design', component: MobileAppComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }