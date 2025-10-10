import { Farmhouse } from "./Farmhouse";
import { Margherita } from "./Margherita";
import { MasaiSpecial } from "./MasaiSpecial";
import { NonVeg } from "./NonVeg";
import { Pineapple } from "./Pineapple";
import { PizzaFactory } from "./PizzaFactory";
import { IPizza } from "./types";

class MasaiPizzaFactory extends PizzaFactory{
    createPizza(type: string): IPizza {
        switch(type){
            case "Margherita":
                return new Margherita();
            case "Farmhouse":
                return new Farmhouse();
            case "Pineapple":
                return new Pineapple();
            case "NonVeg":
                return new NonVeg();
            case "MasaiSpecial":
                return new MasaiSpecial();
                default :
                throw new Error("Incorrect pizza order");
        }

    }
}
 