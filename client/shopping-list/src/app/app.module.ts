import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ShopitemComponent } from "./shopitem/shopitem.component";

@NgModule({
  declarations: [AppComponent, ShopitemComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
