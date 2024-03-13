function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log(" - Just bread, really?");
    }
    else {
        console.log(" - Bread");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log(" - ".concat(item));
        }
        console.log(" - Bread");
    }
    console.log("Enjoy your sandwich!");
}
orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Ham", "Mustard");
orderSandwich();
