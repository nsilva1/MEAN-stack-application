import { Component, OnInit } from "@angular/core";
import { Item } from "../item";
import { DataService } from "../data.service";

@Component({
  selector: "app-shopitem",
  templateUrl: "./shopitem.component.html",
  styleUrls: ["./shopitem.component.css"],
  providers: [DataService]
})
export class ShopitemComponent implements OnInit {
  shoppingItemList: Item[] = [];

  constructor(private dataservice: DataService) {}

  getItems() {
    this.dataservice.getShoppingitems().subscribe(items => {
      this.shoppingItemList = items;
      console.log(
        "Data from dataservice: " + this.shoppingItemList[0].itemName
      );
    });
  }

  ngOnInit() {
    this.getItems();
  }
}
