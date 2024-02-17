import { pop } from "@jridgewell/set-array";
import TextField from "@mui/material/TextField";
import React from "react";

const { isNamedExportBindings } = require("typescript");

let debug = 1; //for testing, 0 for not



class Ingredient
{
    //objects food, amount, amountType, mealType
    //functions new, add, edit, remove, replaceDiet (work on later)
    constructor(ingredientName, amount, amountType)
    {
        this.name = ingredientName;
        this.amount = amount;
        this.amountType = amountType;
    }   
}


/*class IRecipe
{
    displayIngredients();
}*/



export default class Recipe
{
    ingredients = [];

    displayName()
    {
        console.log("Name of ingredient is " + this.ingredients[0].name);
    }

    displayAmount()
    {
        console.log("Amount of ingredient is " + this.ingredients[0].amount);
    }

    displayAmountType()
    {
        console.log("Amount type of ingredient is " + this.ingredients[0].amountType);
    }

    displayMealType()
    {
        console.log("Meal type is " + this.mealType);
    }


    
    displayAll()
    {
        let index = 0;
        console.log("Meal type is " + this.mealType);
        for(index = 0; index < this.ingredients.length; index++)
        {
            console.log("Name of ingredient is " + this.ingredients[index].name);
            console.log("Amount of ingredient is " + this.ingredients[index].amount);
            console.log("Amount type of ingredient is " + this.ingredients[index].amountType);
        }
    }
    
    //later, add specific foods to recipe and ingredients, aka rolls in thanksgiving dinner
    constructor(mealType,ingredientName,amount,amountType)
    {
        this.mealType = mealType;
        this.ingredients.push(new Ingredient(ingredientName,amount,amountType));
    }

    add(newName,newAmount,newType)
    {
        this.ingredients.push(new Ingredient(newName,newAmount,newType));
    }
    addManual()
    {
        newName = prompt("What is the name of the food");
        newAmount = parseFloat(prompt("What is the new amount"));
        newType = prompt("What is the amount type");
        this.ingredients.push(newName,newAmount,newType);
    }

    remove()
    {
        nameRemove = prompt("What food do you want to remove?");
        for(x of this.ingredients)
        {
            if(x.name == nameRemove)
            {
                let end = this.ingredients.length;
                end--;
                let temp = this.ingredients[x];
                this.ingredients[x] = this.ingredients[end];
                this.ingredients[end] = temp;
                pop(this.ingredients);
                //delete x; //need to figure out how to delete objects from arrays and fix the holes
                //swap chosen with last, pop, and resort?
            }
        }
    }

    edit(choice)
    {
        // 1 = name, 2 = amount, 3 = amountType, 4 = mealType
        switch(choice)
        {
            case 1:
                this.foods.name = prompt("What is the new name");
                break;
            case 2:
                this.foods.amount = prompt("What is the new amount");
                break;
            case 3:
                this.foods.amountType = prompt("What is the new amount type");
                break;
            case 4:
                this.mealType = prompt("what is the new meal type");
            default:
                console.log("That is not a proper choice");
        }


    }

    
}

if(debug == 1)
{
    const Sandwich = new Recipe("dinner","Turkey", 2,"oz");
    Sandwich.add("bread",2,"lbs");
    Sandwich.add("lettuce",2,"lbs");
    Sandwich.displayAll();
}

