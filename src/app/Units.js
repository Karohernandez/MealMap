module.exports =  class Units
{
    static tbspFromTsp(amount)
    {
        return amount/3;
    }

    static tspFromTbsp(amount)
    {
        return amount * 3;
    }

    /*static cupFromTbsp(amount)
    {
        return amount/16;
    }

    static tbspnFromCup(amount)
    {
        return amount * 16;
    }*/

    static cupFromTsp(amount)
    {
        return amount/48;
    }

    static tspFromCup(amount)
    {
        return amount * 48;
    }

    static tbspFromCup(amount)
    {
        return amount/16;
    }

    static cupFromTbsp(amount)
    {
        return amount * 16;
    }

    //
    static flozFromCup(amount)
    {
        return amount/8;
    }
    
    static cupFromFloz(amount)
    {
        return amount * 8;
    }

    //
    static pintFromCup(amount)
    {
        return amount *2;
    }

    static cupFromPint(amount)
    {
        return amount/2;
    }

    //
    static quartFromPint(amount)
    {
        return amount/2;
    }

    static pintFromQuart(amount)
    {
        return amount * 2;
    }

    static cupFromQuart(amount)
    {
        return amount/4;
    }

    static quartFromCup(amount)
    {
        return amount * 4;
    }

    static gallonFromQuart(amount)
    {
        return amount/4;
    }

    static quartFromGallon(amount)
    {
        return amount * 4;
    }

    static poundFromOz(amount)
    {
        return amount/16;
    }

    static ozFromPound(amount)
    {
        return amount * 16;
    }

    //adds together two different unit types
    static unitConversionCompare(name1, name2, amount)
    {
        if(name1 == "tbsp" && name2 == "tsp")
        {
            return this.tbspFromTsp(amount);
        }
        else if(name1 == "tsp" && name2 == "tbsp")
        {
            return this.tspFromTbsp(amount);
        }
        else if(name1 == "cup" && name2 == "tbsp")
        {
            return this.cupFromTbsp(amount);
        }
        else if(name1 == "cup" && name2 == "tsp")
        {
            return this.cupFromTsp(amount);
        }
        else if(name1 == "tsp" && name2 == "cup")
        {
            return this.tspFromCup(amount);
        }
        else if(name1 == "tbsp" && name2 == "cup")
        {
            return this.tbspFromCup(amount);
        }
        else if(name1 == "floz" && name2 == "cup")
        {
            return this.flozFromCup(amount);
        }
        else if(name1 == "cup" && name2 == "floz")
        {
            return this.cupFromFloz(amount);
        }
        else if(name1 == "pint" && name2 == "cup")
        {
            return this.pintFromCup(amount);
        }
        else if(name1 == "cup" && name2 == "pint")
        {
            return this.cupFromPint(amount);
        }
        else if(name1 == "quart" && name2 == "pint")
        {
            return this.quartFromPint(amount);
        }
        else if(name1 == "pint" && name2 == "quart")
        {
            return this.pintFromQuart(amount);
        }
        else if(name1 == "cup" && name2 == "quart")
        {
            return this.cupFromQuart(amount);
        }
        else if(name1 == "quart" && name2 == "cup")
        {
            return this.quartFromCup(amount);
        }
        else if(name1 == "gallon" && name2 == "quart")
        {
            return this.gallonFromQuart(amount);
        }
        else if(name1 == "quart" && name2 == "gallon")
        {
            return this.quartFromGallon(amount);
        }
        else if(name1 == "pound" && name2 == "oz")
        {
            return this.poundFromOz(amount);
        }
        else if(name1 == "oz" && name2 == "pounds")
        {
            return this.ozFromPound(amount);
        }
    }
}