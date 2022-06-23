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
            case "D" :
                return MINIGAMES.KEYGAME;
        }
        throw 'unknown tile value';
    }
}