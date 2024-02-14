
class food
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

/*class foods extends food
{
    constructor()
    {
        this.foods = [];
    }
}*/

class recipe extends food
{
    constructor(mealType,name,amount,amountType)
    {
        this.mealType = mealType;
        var foods = [new food(name,amount,amountType)];
    }

    add()
    {
        newName = prompt("What is the name of the food");
        newAmount = parseFloat(prompt("What is the new amount"));
        newType = prompt("What is the amount type");
        this.foods.push(newName,newAmount,newType);
    }

    remove()
    {
        nameRemove = prompt("What food do you want to remove?");
        for(x of foods)
        {
            if(x.name == nameRemove)
            {
                //delete x; //need to figure out how to delete objects from arrays and fix the holes
            }
        }
    }
}