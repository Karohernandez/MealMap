const pop= "@jridgewell/set-array";
const TextField = "@mui/material/TextField";
const React = "react";
const prompt = require("prompt-sync")();
const units = require("./Units.js");
const Ingredients = require("./Ingredient.js")


//SUPER IMPORTANT 
//to run only backend
// node ./src/app/Recipe.js"

// import { parse } from 'node-html-parser';
//const parse = require('node-html-parser');

//const { isNamedExportBindings } = require("typescript");

let debug = 2; //for testing, 0 for not






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

class SpecificIngredient
{
    constructor(name,amount)
    {
        this.Samount = amount;
        this.Sname = name;
    }

    setSamount(x)
    {
        this.Samount = x;
    }
    setSname(x)
    {
        this.Sname = x;
    }

    getSamount()
    {
        return this.Samount;
    }

    getSname()
    {
        return this.Sname;
    }

}

class ShoppingList
{
    
    /*constructor()
    {
        this.Recipe.push(new Recipe('type','ingredient',0,'weight')); 
    }
    constructor(mealType,ingredientName,amount,amountType)
    {
        this.Recipe.push(new Recipe(mealType,ingredientName,amount,amountType));
    }*/
    constructor(sRecipe)
    {
        this.Recipes.push(sRecipe);
        this.SpecificIngs.push(new SpecificIngredient(this.Recipes[0].ingredients[0].name,this.Recipes[0].ingredients[0].amount));
        //first object from recipe] //array of specfic ingredients for aggregation, array of class SpecificIngredients
    }

    addR(sRecipe)
    {
        this.Recipes.push(sRecipe);
    }

    Recipes = [];
    SpecificIngs = []; 
    

    //pool to gether ingredients of the same type in an array 
    ingredientsAggregate()
    {
        this.SpecificIngs.splice(0,1);
        let numIndex = 0;
        let typeIndex = 0;
        let x;
        let y;
        let z;
        

        let singularIngs = [this.Recipes[0].ingredients[0].name];
        for(let index1 = 0; index1 < this.Recipes.length;index1++)
        {
            for(let index2 = 0; index2 < this.Recipes[index1].ingredients.length; index2++)
            {
                console.log(this.Recipes[index1].ingredients[index2].name);
                
                let location = 0;
                if(this.SpecificIngs.includes(this.Recipes[index1].ingredients[index2].name))
                {
                    location = this.SpecificIngs.indexOf(this.Recipes[index1].ingredients[index2]);
                    this.SpecificIngs[location].Samount += this.Recipes[index1].ingredients[index2].amount;
                }
                else
                {
                    this.SpecificIngs.push(new SpecificIngredient(this.Recipes[index1].ingredients[index2].name,this.Recipes[index1].ingredients[index2].amount));
                }
            }
        }
        console.log("this is single ings " + singularIngs);

        for(let index1 = 0; index1 < this.SpecificIngs.length; index1++)
        {
            for(let index2 = 0; index2 < this.SpecificIngs.length; index2++)
            {
                if((index1 != index2) && (this.SpecificIngs[index1].Sname == this.SpecificIngs[index2].Sname))
                {
                    this.SpecificIngs[index1].Samount += this.SpecificIngs[index2].Samount;
                    this.SpecificIngs.splice(index2,1);
                }
            }
        }
    }

    ingredientsToGet()
    {
        
        this.SpecificIngs.forEach(element => {
            console.log(element.Sname, " = ", element.Samount);
            //console.log(element.Samount);
        });
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

if(debug == 2)
{
    const Sandwich = new Recipe("dinner","Turkey", 2,"oz");
    Sandwich.add("bread",2,"lbs");
    Sandwich.add("lettuce",2,"lbs");
    const thisWeeksList = new ShoppingList(Sandwich);
    const Sandwich2 = new Recipe("lunch","Ham",2,"oz");
    Sandwich2.add("bread",3,"lbs");
    thisWeeksList.addR(Sandwich2);
    thisWeeksList.ingredientsAggregate();
    thisWeeksList.ingredientsToGet();
}

