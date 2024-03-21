const Slist = require("./ShoppingList.js");
const recipe = require("./Recipe.js");
const prompt = require("prompt-sync")();
//set for replacing dietary needs

//Vegetarian
//Vegan
//Lactose-Intolerant
//Kosher
//Halaal
//Gluten
//nut
//pescatarian
//sugar free

module.exports = class diets
{
    constructor()
    {
        
    }

    searchDiet(dietType, ingredient)
    {
        const meats = new Set(["pork","beef","chicken","turkey","duck","goat","mutton","bison","kangaroo","buffalo","rabbit","frog","snake","alligator","crocodile","guinea pig"]);
        const fishes = new Set(["salmon","cod","tilapia"]);
        const dairy = new Set(["milk", "cheese","butter"]);
        const crustaceans = new Set(["crab","lobster","shrimp","oyster"]);

        if(dietType == "vegetarian")
        {
            if((meats.has(ingredient) || fishes.has(ingredient)))
            {
                return true;
            }
        }
        else if(dietType == "vegan")
        {
            if(meats.has(ingredient) || fishes.has(ingredient) || dairy.has(ingredient) || crustaceans.has(ingredient))
            {
                return true;
            }
        }
        else if(dietType == "lactose")
        {
            if(dairy.has(ingredient))
            {
                return true;
            }
        }
        else if(dietType == "kosher")
        {
            
        }
        else if(dietType == "halaal")
        {
            
        }
        else if(dietType == "gluten")
        {
            
        }
        else if(dietType == "nut")
        {
            
        }
    }

    addDiet()
    {
        //console.log("enter in a new datatype : ");
        newName = prompt("What is the name of the diet : "); //create a new set // can't access before initilization
        console.log("enter in ingredients, quit to exit\n"); 
        const newName = new Set();
        //loop through taking names, exit on quit
        while(true)
        {
            newIngredient = prompt("");
            if(newIngredient == "quit")
            {
                break;
            }
            newName.add(newIngredient);
        }
        return newName; // return set
    }

    searchCustomDiet(cDiet, ingredient)
    {
        if(cDiet.has(ingredient))
        {
            return true;
        }
    }



}