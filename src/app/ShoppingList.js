const Ingredients = require("./Ingredient.js")
const units = require("./Units.js");
const Recipe = require("./Recipe.js");
const DietR = require("./DietaryReplacement.js");
const prompt = require("prompt-sync")();




module.exports = class ShoppingList
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
        

        //creates the list of specific ingredients with repeaters
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
                    this.SpecificIngs.push(new SpecificIngredient(this.Recipes[index1].ingredients[index2].name,this.Recipes[index1].ingredients[index2].amount, this.Recipes[index1].ingredients[index2].units));
                }
            }
        }
        console.log("this is single ings " + singularIngs);


        //aggregates the specific list, adding repeating values and splicing away the leftovers
        for(let index1 = 0; index1 < this.SpecificIngs.length; index1++)
        {
            for(let index2 = 0; index2 < this.SpecificIngs.length; index2++)
            {
                if((index1 != index2) && (this.SpecificIngs[index1].Sname == this.SpecificIngs[index2].Sname))
                {
                    if(this.SpecificIngs[index1].Sunits == this.SpecificIngs[index2].Sunits)
                    {
                        this.SpecificIngs[index1].Samount += this.SpecificIngs[index2].Samount;
                        this.SpecificIngs.splice(index2,1);
                    }
                    else
                    {
                        this.SpecificIngs[index2].Samount = units.unitConversionCompare(this.SpecificIngs[index1].Sunits, this.SpecificIngs[index2].Sunits, this.SpecificIngs[index2].Samount);
                        this.SpecificIngs[index1].Samount += this.SpecificIngs[index2].Samount;
                        this.SpecificIngs.splice(index2,1);
                    }
                }
            }
        }
    }

    dietChange(dietType) //needs to call after aggregate
    {
        const dietR = new DietR();
        for(let index = 0; index < this.SpecificIngs.length; index++)
        {
            if(dietR.searchDiet(dietType, this.SpecificIngs[index].Sname))
            {
                console.log(this.SpecificIngs[index].Sname, " was removed");
                this.SpecificIngs.splice(index,1);
            }
        }
    }

    dietChangePersonal()
    {
        const dietR = new DietR();
        const newDiet = [];
        var count = 0;

        while(true)
        {
            console.log("entering a diet: ");
            newDiet[count] = dietR.addDiet();
            count++;
            console.log("type quit to leave, anything else to enter in another diet.")
            var input = prompt("choice : ");
            input = input.toLowerCase();
            if(input == "quit")
            {
                break;
            }
        }
        dietR.printCustomDiet(newDiet[0]);

        for(let dietIndex = 0; dietIndex < newDiet.length; dietIndex++)
        {
            for(let index = 0; index < this.SpecificIngs.length; index++)
            {
                if(dietR.searchCustomDiet(newDiet[dietIndex], this.SpecificIngs[index].Sname))
                {
                    console.log(this.SpecificIngs[index].Sname, " was removed");
                    this.SpecificIngs.splice(index,1);
                }
            }
        }

    }

    ingredientsToGet()
    {
        
        this.SpecificIngs.forEach(element => {
            console.log(element.Sname, " = ", element.Samount, " and type is ", element.Sunits);
        });
    }


}

class SpecificIngredient
{
    constructor(name,amount, units)
    {
        this.Samount = amount;
        this.Sname = name;
        this.Sunits = units;
    }

    setSamount(x)
    {
        this.Samount = x;
    }
    setSname(x)
    {
        this.Sname = x;
    }
    setSunits(x)
    {
        this.Sunits = x;
    }

    getSamount()
    {
        return this.Samount;
    }

    getSname()
    {
        return this.Sname;
    }

    getSunits()
    {
        return this.Sunits;
    }

}

