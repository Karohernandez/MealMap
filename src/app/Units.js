module.exports =  class Units
{
    static tbspFromTsp(amount)
    {
        return amount/3;
    }

    static TspFromTbsp(amount)
    {
        return amount * 3;
    }

    static cupFromTbsp(amount)
    {
        return amount/16;
    }

    static tbspnFromCup(amount)
    {
        return amount * 16;
    }

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

    static flozFromCup(amount)
    {
        return amount/8;
    }
    
    static cupFromFloz(amount)
    {
        return amount * 8;
    }

    static pintFromCup(amount)
    {
        return amount *2;
    }

    static cupFromPint(amount)
    {
        return amount/2;
    }

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
}