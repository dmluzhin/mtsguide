import { NgModule } from "@angular/core";
import { LayoutComponent} from "./layout.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [],
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent
  ]
})

export class LayoutModule { }
