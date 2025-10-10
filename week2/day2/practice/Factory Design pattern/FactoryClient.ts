import {MasaiPizzaFactory} from "../Factory Design pattern/MasaiPizzaFactory"

const masaiPizzaFactory: MasaiPizzaFactory=new 
MasaiPizzaFactory();


masaiPizzaFactory.orderPizza("Farmhouse");
masaiPizzaFactory.orderPizza("MasaiSpecial");