import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { IsometricGrid } from './shared/components/my-work/my-work.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { WindowRef } from '../WindowRef';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { ProfileWidgetComponent } from './shared/components/profile-widget/profileWidget.component';
import { ProfileAboutWidgetComponent } from './shared/components/profile-about-widget/profileAboutWidget.component';
import { FeedComponent } from './shared/components/feed/feed.component';
import { CarouselWidgetComponent } from './shared/components/carousel-widget/carousel-widget.component';
import { MobileWidgetComponent } from './shared/components/svg/mobile';
import { UIUXWidgetComponent } from './shared/components/svg/UI-UX';
import { ProductWidgetComponent } from './shared/components/svg/productdesign';
import { WebDesign } from './shared/components/svg/webDesign';

import { BlogComponent } from './shared/components/blog/blog.component';
import { BlogDetailComponent } from './shared/components/blog/blogDetail.component';
import { MyWorkComponent } from './shared/components/my-work/my-work.component';
import { MyWorkDetailComponent } from './shared/components/my-work-detail/my-work-detail.component';
import { NewBlogComponent } from './shared/components/blog/newblog.component';
import { MobileAppComponent } from './shared/components/expertise/mobileapp.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { highChartComponent } from './shared/components/highchart/highchart.component';
import { DateFilter } from '../../src/pipes/dateFilter';
import { NewlinePipe } from '../../src/pipes/utility';

import '../assets/styles';

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        HeaderComponent,
        LayoutComponent,
        BlogDetailComponent,
        HomeComponent,
        MobileAppComponent,
        MyWorkComponent,
        MyWorkDetailComponent,
        NewBlogComponent,
        ProfileComponent,
        ProfileWidgetComponent,
        ProfileAboutWidgetComponent,
        FeedComponent,
        CarouselWidgetComponent,
        MobileWidgetComponent,
        UIUXWidgetComponent,
        ProductWidgetComponent,
        WebDesign,
      
        IsometricGrid,
        highChartComponent,
        DateFilter,
        NewlinePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [WindowRef],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }