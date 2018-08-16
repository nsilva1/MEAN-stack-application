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
  selectedItem: Item;
  toggleForm: boolean = false;

  constructor(private dataservice: DataService) {}

  getItems() {
    this.dataservice.getShoppingitems().subscribe(items => {
      this.shoppingItemList = items;
      console.log(
        "Data from dataservice: " + this.shoppingItemList[0].itemName
      );
    });
  }

  addItem(form) {
    let newItem: Item = {
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemBought: false
    };
    this.dataservice.addShoppingItem(newItem).subscribe(item => {
      console.log(item);
      this.getItems();
    });
  }

  deleteItem(id) {
    this.dataservice.deleteShoppingItem(id).subscribe(data => {
      console.log(data);
      if (data.n == 1) {
        for (var i = 0; i < this.shoppingItemList.length; i++) {
          if (id == this.shoppingItemList[i]._id) {
            this.shoppingItemList.splice(i, 1);
          }
        }
      }
    });
  }

  editItem(form) {
    let newItem: Item = {
      _id: this.selectedItem._id,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      itemBought: form.value.itemBought
    };
    this.dataservice.updateShoppingItem(newItem).subscribe(result => {
      console.log(
        "Original item to be updated with old values: " + result.itemQuantity
      );
      this.getItems();
      this.toggleForm = !this.toggleForm;
    });
  }

  showEditForm(item) {
    this.selectedItem = item;
    this.toggleForm = !this.toggleForm;
  }

  updateItemChecked(item) {
    item.itemBought = !item.itemBought;
    this.dataservice.updateShoppingItem(item).subscribe(result => {
      console.log("Original checkbox value: " + result.itemBought);
      this.getItems();
    });
  }

  ngOnInit() {
    this.getItems();
  }
}
