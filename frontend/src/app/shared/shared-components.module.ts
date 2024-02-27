import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared.module";


@NgModule({
  declarations: [
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule ],
  exports: [

  ],
})
export class SharedComponentsModule {}