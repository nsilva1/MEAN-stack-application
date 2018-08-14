import { Component, OnInit } from "@angular/core";
import { Item } from "../item";

@Component({
  selector: "app-shopitem",
  templateUrl: "./shopitem.component.html",
  styleUrls: ["./shopitem.component.css"]
})
export class ShopitemComponent implements OnInit {
  shoppingItemList: Item[] = [];

  constructor() {}

  getItems() {}

  ngOnInit() {}
}
