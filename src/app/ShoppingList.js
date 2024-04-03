const Ingredients = require("./Ingredient.js")
const units = require("./Units.js");
const Recipe = require("./Recipe.js");
const DietR = require("./DietaryReplacement.js");
const diets = require("./DietaryReplacement.js");
const prompt = require("prompt-sync")();




module.exports = class ShoppingList {

    /*constructor()
    {
        this.Recipe.push(new Recipe('type','ingredient',0,'weight')); 
    }
    constructor(mealType,ingredientName,amount,amountType)
    {
        this.Recipe.push(new Recipe(mealType,ingredientName,amount,amountType));
    }*/
    constructor(sRecipe) {
        this.Recipes.push(sRecipe);
        this.SpecificIngs.push(new SpecificIngredient(this.Recipes[0].ingredients[0].name, this.Recipes[0].ingredients[0].amount));
        //first object from recipe] //array of specfic ingredients for aggregation, array of class SpecificIngredients
    }

    addR(sRecipe) {
        this.Recipes.push(sRecipe);
    }

    Recipes = [];
    SpecificIngs = [];


    //pool to gether ingredients of the same type in an array 
    ingredientsAggregate() {
        this.SpecificIngs.splice(0, 1);
        let numIndex = 0;
        let typeIndex = 0;
        let x;
        let y;
        let z;


        //creates the list of specific ingredients with repeaters
        let singularIngs = [this.Recipes[0].ingredients[0].name];
        for (let index1 = 0; index1 < this.Recipes.length; index1++) {
            for (let index2 = 0; index2 < this.Recipes[index1].ingredients.length; index2++) {
                console.log(this.Recipes[index1].ingredients[index2].name);

                let location = 0;
                if (this.SpecificIngs.includes(this.Recipes[index1].ingredients[index2].name)) {
                    location = this.SpecificIngs.indexOf(this.Recipes[index1].ingredients[index2]);
                    this.SpecificIngs[location].Samount += this.Recipes[index1].ingredients[index2].amount;
                }
                else {
                    this.SpecificIngs.push(new SpecificIngredient(this.Recipes[index1].ingredients[index2].name, this.Recipes[index1].ingredients[index2].amount, this.Recipes[index1].ingredients[index2].units));
                }
            }
        }
        console.log("this is single ings " + singularIngs);


        //aggregates the specific list, adding repeating values and splicing away the leftovers
        for (let index1 = 0; index1 < this.SpecificIngs.length; index1++) {
            for (let index2 = 0; index2 < this.SpecificIngs.length; index2++) {
                if ((index1 != index2) && (this.SpecificIngs[index1].Sname == this.SpecificIngs[index2].Sname)) {
                    if (this.SpecificIngs[index1].Sunits == this.SpecificIngs[index2].Sunits) {
                        this.SpecificIngs[index1].Samount += this.SpecificIngs[index2].Samount;
                        this.SpecificIngs.splice(index2, 1);
                    }
                    else {
                        this.SpecificIngs[index2].Samount = units.unitConversionCompare(this.SpecificIngs[index1].Sunits, this.SpecificIngs[index2].Sunits, this.SpecificIngs[index2].Samount);
                        this.SpecificIngs[index1].Samount += this.SpecificIngs[index2].Samount;
                        this.SpecificIngs.splice(index2, 1);
                    }
                }
            }
        }
    }

    dietChange(dietType) //needs to call after aggregate, searches preset diets
    {
        const dietR = new DietR();
        for (let index = 0; index < this.SpecificIngs.length; index++) {
            if (dietR.searchDiet(dietType, this.SpecificIngs[index].Sname)) {
                console.log(this.SpecificIngs[index].Sname, " was removed");
                this.SpecificIngs.splice(index, 1);
            }
        }
    }

    dietAddPersonal() //add new diets, both names and ingredients
    {
        const dietR = new DietR();
        const newDiet = [];
        var count = 0;

        //enter in however many diets a user wants
        while (true) {
            console.log("entering a diet: ");
            newDiet[count] = dietR.addDiet();
            count++;
            console.log("type quit to leave, anything else to enter in another diet.")
            var input = prompt("choice : ");
            input = input.toLowerCase();
            if (input == "quit") {
                break;
            }
        }

        //dietR.printCustomDiet(newDiet[0]);

        return newDiet;

    }

    listRemove(dietSets) //remove diet matches from the list 
    {
        const dietR = new DietR();
        //checks each set for each ingredient in the list, and removes matches from the list
        for (let dietIndex = 0; dietIndex < dietSets.length; dietIndex++) {
            for (let index = 0; index < this.SpecificIngs.length; index++) {
                if (dietR.searchCustomDiet(dietSets[dietIndex], this.SpecificIngs[index].Sname)) {
                    console.log(this.SpecificIngs[index].Sname, " was removed");
                    this.SpecificIngs.splice(index, 1);
                }
            }
        }
    }

    dietRemove(dietSets) //remove out diets, either parts or whole
    {
        const dietR = new DietR();

        dietR.printCustomDiet(dietSets);
        while (true)  //remove whole diets, or sets
        {
            console.log("enter quit to leave set removal.")
            var input = prompt("enter in a set to remove from a diet list : ");
            input = input.toLowerCase();

            if (input == "quit") {
                break;
            }

            for (let index = 0; index < dietSets.length; index++) {
                if (dietSets[index].has(input)) {
                    console.log("set containing ", input, " was removed");
                    dietSets.splice(index, 1);
                }
            }
        }

        while (true) //remove individual ingredients
        {
            console.log("enter quit to leave set removal.")
            var input = prompt("enter in a ingredient to remove from a diet list : ");
            input = input.toLowerCase();

            if (input == "quit") {
                break;
            }

            for (let index = 0; index < dietSets.length; index++) //removing individual ingredients
            {
                /*for(const setIndex of dietSets[index].values())
                {
                    string = setIndex;
                }*/

                if (dietSets[index].has(input)) {
                    console.log(input, " was removed");
                    dietSets[index].delete(input);
                }
            }
        }
    }

    ingredientsToGet() {

        this.SpecificIngs.forEach(element => {
            console.log(element.Sname, " = ", element.Samount, " and type is ", element.Sunits);
        });
    }




}

class SpecificIngredient //smaller set of ingredients, meant to be no copies in the list
{
    constructor(name, amount, units) {
        this.Samount = amount;
        this.Sname = name;
        this.Sunits = units;
    }

    setSamount(x) {
        this.Samount = x;
    }
    setSname(x) {
        this.Sname = x;
    }
    setSunits(x) {
        this.Sunits = x;
    }

    getSamount() {
        return this.Samount;
    }

    getSname() {
        return this.Sname;
    }

    getSunits() {
        return this.Sunits;
    }

}

