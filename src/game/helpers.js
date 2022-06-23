class Helpers
{
    static{

    }

    static mapTileValueToGame(value)
    {
        switch (value)
        {
            case "A" : 
                return MINIGAMES.BOXGAME;
            case "B" : 
                return MINIGAMES.NUMBERS;
            case "C" : 
                return MINIGAMES.BOLTS;
        }
        throw 'unknown tile value';
    }
}