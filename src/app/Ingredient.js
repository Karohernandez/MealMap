//const units = require("./Units.js");

module.exports = class Ingredient
{
    //objects food, amount, units, mealType
    //functions new, add, edit, remove, replaceDiet (work on later)
    constructor(ingredientName, amount, units)
    {
        this.name = ingredientName;
        this.name = this.name.trimStart();
        this.name = this.name.trimEnd();
        this.name = this.name.toLowerCase();
        //this.amount = units.tbspFromTsp(amount);
        this.amount = amount;
        this.units = units;
    }
    
    getAmount()
    {
        return this.amount;
    }

    getUnits()
    {
        return this.units;
    }

    getName()
    {
        return this.name;
    }

    
}