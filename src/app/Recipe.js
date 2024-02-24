const pop= "@jridgewell/set-array";
const TextField = "@mui/material/TextField";
const React = "react";
const prompt = require("prompt-sync")();
const units = require("./Units.js");
const Ingredients = require("./Ingredient.js");


//SUPER IMPORTANT 
//to run only backend
// node ""./src/app/Recipe.js"

// import { parse } from 'node-html-parser';
//const parse = require('node-html-parser');

//const { isNamedExportBindings } = require("typescript");

let debug = 2; //for testing, 0 for not


module.exports = class Recipe
{

    //later, add specific foods to recipe and ingredients, aka rolls in thanksgiving dinner
    constructor(mealType,ingredientName,amount,amountType)
    {
        this.mealType = mealType;
        this.ingredients.push(new Ingredients(ingredientName,amount,amountType));
    }

    ingredients = [];

    getMealType()
    {
        return this.mealType;
    }
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
            console.log("New Ingredient");
            console.log("Name of ingredient is " + this.ingredients[index].name);
            console.log("Amount of ingredient is " + this.ingredients[index].amount);
            console.log("Amount type of ingredient is " + this.ingredients[index].amountType);
        }
    }
    
    

    add(newName,newAmount,newType)
    {
        this.ingredients.push(new Ingredients(newName,newAmount,newType));
    }
    addManual() //adding in attributes manually
    {
        newName = prompt("What is the name of the food");
        newAmount = parseFloat(prompt("What is the new amount"));
        newType = prompt("What is the amount type");
        this.ingredients.push(newName,newAmount,newType);
    }

    remove()
    {
        
        let nameRemove = prompt("What food do you want to remove? ");
        let end = this.ingredients.length;
        end--;
        let index = 0;
        for(let x of this.ingredients)
        {
            
            if(x.name == nameRemove)
            {
                
                this.ingredients.splice(index,1); //remove an ingredient with splice

            }
            index++;
        }
    }

    edit()
    {

    console.log("1 = name, 2 = amount, 3 = amountType, 4 = mealType");
    let choice = parseInt(prompt("pick which thing to edit "));
    let listNum = parseInt(prompt("which thing in the list?"));
    choice--;
        switch(choice)
        {
            case 1:
                this.ingredients[listNum].name = prompt("What is the new name ");
                break;
            case 2:
                this.ingredients[listNum].amount = parseInt(prompt("What is the new amount "));
                break;
            case 3:
                this.ingredients[listNum].amountType = prompt("What is the new amount type ");
                break;
            case 4:
                this.mealType = prompt("what is the new meal type ");
            default:
                console.log("That is not a proper choice");
        }


    }

    
}

//down below is shopping list specific



