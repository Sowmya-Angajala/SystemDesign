import { IPizza } from "./types";

export class NonVeg implements IPizza{
    prepare(): void {
        console.log("preparing");
        
    }
    bake(): void {
        console.log("baking");
        
    }
    cut(): void {
        console.log("cutting");
        
    }
    box(): void {
        console.log("box packing");
        
    }
}