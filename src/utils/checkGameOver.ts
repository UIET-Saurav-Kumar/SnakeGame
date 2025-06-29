import { Coordinates } from "../types/types";


export function checkGameOver (head : Coordinates , boundaries : any) : boolean {
    
    return (
        head.x < boundaries.xMin ||
        head.x > boundaries.xMax ||
        head.y < boundaries.yMin ||
        head.y > boundaries.yMax 

    )
}