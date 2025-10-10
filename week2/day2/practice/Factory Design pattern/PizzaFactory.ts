import { IPizza } from "./types";

export abstract class PizzaFactory{
    abstract createPizza(type:string): IPizza;
    orderPizza(type:string):void{

        //factory function : returning object
        
        const pizza =this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

    }
}