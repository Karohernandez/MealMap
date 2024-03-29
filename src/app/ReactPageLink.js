const pop = "@jridgewell/set-array";
const TextField = "@mui/material/TextField";
const React = "react";
const prompt = require("prompt-sync")();
const units = require("./Units.js");
const Ingredients = require("./Ingredient.js");
const Recipe = require("./Recipe.js");
const ShoppingList = require("./ShoppingList.js");


//debugging variables and testing here
let debug = 2;

/*export const one = () => {
    let i = 0;
        if (this === that) {
            i = 0;
        } else {
           i = 1;
        }
    }*/

    export const printD = () => {
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
            Sandwich2.add("bread", 3, "lbs");
            thisWeeksList.addR(Sandwich2);
            thisWeeksList.ingredientsAggregate();
            thisWeeksList.ingredientsToGet();
        }
    }

module.exports = class debugPrint {
    constructor() {

    }
}

//db = new debugPrint();
//db.printD();