import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.comonent';
import { ServersComponent } from './servers/servers.component';
import { SuccessSignalComponent } from './success-signal/success-signal.component';
import { WarningAlertComponent } from "../warning-alert/warning-alert.component1";
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessSignalComponent,
    WarningAlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
