const Slist = require("./ShoppingList.js");
const recipe = require("./Recipe.js");
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
        const meats = new Set(["pork","beef","chicken","turkey","duck","goat","mutton","bison","kangaroo","buffalo","rabbit","frog","snake","alligator","crocodile","guinea pig"]);
        const fishes = new Set(["salmon","cod","tilapia"]);
        const dairy = new Set(["milk", "cheese","butter"]);
        const crustaceans = new Set(["crab","lobster","shrimp","oyster"]);
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



}