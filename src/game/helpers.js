class Helpers {

    static mapTileValueToGame(value) {
        switch (value) {
            case "A":
                return MINIGAMES.BOXGAME;
            case "B":
                return MINIGAMES.NUMBERS;
            case "C":
                return MINIGAMES.BOLTS;
            case "D":
                return MINIGAMES.KEYGAME;
            case "E":
                return MINIGAMES.PRESSBUTTON;
        }
        return null;
    }
}