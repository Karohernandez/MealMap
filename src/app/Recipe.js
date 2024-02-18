const pop= "@jridgewell/set-array";
const TextField = "@mui/material/TextField";
const React = "react";
const prompt = require("prompt-sync")();

// import { parse } from 'node-html-parser';
//const parse = require('node-html-parser');

//const { isNamedExportBindings } = require("typescript");

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


/*class IRecipe
{
    displayIngredients();
}*/


class Recipe
{

    //later, add specific foods to recipe and ingredients, aka rolls in thanksgiving dinner
    constructor(mealType,ingredientName,amount,amountType)
    {
        this.mealType = mealType;
        this.ingredients.push(new Ingredient(ingredientName,amount,amountType));
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
        
        let nameRemove = prompt("What food do you want to remove? ");
        let end = this.ingredients.length;
        end--;
        let index = 0;
        for(let x of this.ingredients)
        {
            
            if(x.name == nameRemove)
            {
                
                this.ingredients.splice(index,1);
                //delete x; //need to figure out how to delete objects from arrays and fix the holes
                //swap chosen with last, pop, and resort?
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

class SpecificIngredient
{
    Samount;
    Sname;
    constructor()
    {
        Samount = 0;
        Sname = 'name';
    }

    setSamount(x)
    {
        this.setSamount = x;
    }
    setSname(x)
    {
        this.Sname = x;
    }

}

class ShoppingList
{
    constructor()
    {
        this.Recipe.push(new Recipe('type','ingredient',0,'weight')); 
    }

    Recipes = [];
    SpecificIngs = [] //array of specfic ingredients for aggregation
    similarIngredientAmounts = []; //aggregated amounts
    pooledIngredientNames = []; // pooled together names

    //pool to gether ingredients of the same type in an array 
    ingredientsAggregate()
    {
        let numIndex = 0;
        let typeIndex = 0;
        for(x in Recipes)
        {
            let iType = x.Ingredient.name;
            for(x in Recipes.ingredients)
            {
                this.push(SpecificIngs);
                this.SpecificIngs[typeIndex].Sname = x.ingredients.name; 
                if(x.ingredients.name = iType)
                {
                    this.SpecificIngs[typeIndex].Samount += x.ingredients.amount;
                }
            }
            typeIndex++;
        }
    }

    ingredientsToGet()
    {
        for (x in this.SpecificIngs)
        {
            console.log(x.Sname);
            console.log(x.Samount);
        }
    }
}

//debugging variables and testing here

if(debug == 1)
{
    const Sandwich = new Recipe("dinner","Turkey", 2,"oz");
    Sandwich.add("bread",2,"lbs");
    Sandwich.add("lettuce",2,"lbs");
    Sandwich.remove();
    Sandwich.edit();
    Sandwich.displayAll();

}

