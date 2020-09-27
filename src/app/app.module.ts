import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgttSingleEliminationTreeModule } from "../../projects/ng-tournament-tree/src/lib/single-elimination-tree/ngtt-single-elimination-tree.module";
import { AppComponent } from "./app.component";
import { MatchModule } from "./match/match.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgttSingleEliminationTreeModule, MatchModule],
  providers: [
    // {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader},
    // provideRoutes([
    //   {loadChildren: './match/match.module#MatchModule'}
    // ])
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
