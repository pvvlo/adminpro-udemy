import { NgModule } from "@angular/core";
import { SharedService } from '../services/shared.service';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        HeaderComponent,
        NopagefoundComponent,
        BreadcrumbsComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        NopagefoundComponent,
        BreadcrumbsComponent,
        SidebarComponent
    ]
})
export class Sharedmodule{}
