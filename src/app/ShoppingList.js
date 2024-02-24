const Ingredients = require("./Ingredient.js")
const units = require("./Units.js");
const Recipe = require("./Recipe.js");




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

