
class Ingredient
{
    //objects food, amount, amountType, mealType
    //functions new, add, edit, remove, replaceDiet (work on later)
    constructor(name, amount, amountType)
    {
        this.name = name;
        this.amount = amount;
        this.amountType = amountType;
    }   
}


/*class IRecipe
{
    displayIngredients();
}*/



class Recipe 
{
    ingredients = [];
    //later, add specific foods to recipe and ingredients, aka rolls in thanksgiving dinner
    constructor(mealType,name,amount,amountType)
    {
        this.mealType = mealType;
        this.ingredients.push(Ingredient(name,amount,amountType));
    }

    add()
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