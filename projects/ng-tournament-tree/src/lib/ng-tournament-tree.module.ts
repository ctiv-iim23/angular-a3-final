import { NgModule } from "@angular/core";
import { NgttSingleEliminationTreeModule } from "./single-elimination-tree/ngtt-single-elimination-tree.module";

const modules = [NgttSingleEliminationTreeModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class NgTournamentTreeModule {}
