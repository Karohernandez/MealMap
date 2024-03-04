const Recipe = require("./Recipe.js");
const ShoppingList = require("./ShoppingList.js");

let debug = 2;

if (debug == 1) {
    const Sandwich = new Recipe("dinner", "Turkey", 2, "oz");
    Sandwich.add("bread", 2, "lbs");
    Sandwich.add("lettuce", 2, "lbs");
    Sandwich.remove();
    Sandwich.edit();
    Sandwich.displayAll();

}

if (debug == 2) {
    const Sandwich = new Recipe("dinner", "Turkey", 2, "oz");
    Sandwich.add("bread", 2, "lbs");
    Sandwich.add("lettuce", 2, "lbs");
    const thisWeeksList = new ShoppingList(Sandwich);
    const Sandwich2 = new Recipe("lunch", "Ham", 2, "oz");
    const Milk1 = new Recipe("dinner", "Milk", 2, "cup");
    const Milk2 = new Recipe("breakfast", "Milk", 8, "pint");
    Sandwich2.add("bread", 3, "lbs");
    thisWeeksList.addR(Sandwich2);
    thisWeeksList.addR(Milk1);
    thisWeeksList.addR(Milk2);
    thisWeeksList.ingredientsAggregate();
    thisWeeksList.ingredientsToGet();
}