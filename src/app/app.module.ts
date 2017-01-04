import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { FeaturedEventsPage } from "../pages/featured_events/featured_events";
import { AccountPage } from "../pages/account/account";
import { NearEventsPage } from "../pages/near_events/near_events";
import { TabsPage } from "../pages/tabs/tabs";

@NgModule(
{
    declarations: [
        MyApp,
        NearEventsPage,
        FeaturedEventsPage,
        AccountPage,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot( MyApp )
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        NearEventsPage,
        FeaturedEventsPage,
        AccountPage,
        TabsPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
} )

export class AppModule {}
