function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log(" - Just bread, really?");
    } else {
        console.log(" - Bread");
        for (let item of items) {
            console.log(` - ${item}`);
        }
        console.log(" - Bread");
    }
    console.log("Enjoy your sandwich!");
}
orderSandwich("Cheese", "Tomato", "Lettuce");
orderSandwich("Ham", "Mustard");
orderSandwich();
