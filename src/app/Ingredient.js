const units = require("./Units.js");

module.exports = class Ingredient
{
    //objects food, amount, amountType, mealType
    //functions new, add, edit, remove, replaceDiet (work on later)
    constructor(ingredientName, amount, amountType)
    {
        this.name = ingredientName;
        this.amount = units.tbspFromTsp(amount);
        this.amountType = amountType;
    }
    
    getAmount()
    {
        return this.amount;
    }

    getAmountType()
    {
        return this.amountType;
    }

    getName()
    {
        return this.name;
    }

    
}