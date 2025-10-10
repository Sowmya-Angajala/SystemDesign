import { IPizza } from "./types";

export class Farmhouse implements IPizza{
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