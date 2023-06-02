import Tetromino from "./tetromino.js";
export default class TetrominoFactory {
    constructor(){
        this.collection = [
            () =>  new Tetromino(
                "#0000ff",
                [
                    [0, 0, 1, 0,],
                    [0, 1, 1, 1,],
                    [0,  0, 0, 0,],
                    [0, 0, 0, 0,]
                ]
            ),

            () => new Tetromino(
                "#00ff00",
                [
                    [0,  1, 1, 0,],
                    [0, 1, 1, 0,],
                    [0, 0, 0, 0,],
                    [0, 0, 0, 0,]
                ]
            ),

            () => new Tetromino(
                "#00ffff",
                [
                    
                    [0, 0, 1, 1,],
                    [0, 1, 1, 0,],
                    [0,  0, 0, 0,],
                    [0, 0, 0, 0,]
                ]
            ),

            () => new Tetromino(
                "#ff0000",
                [
                    [0,  0, 1, 0,],
                    [0, 0, 1, 0,],
                    [0, 0, 1, 1,],
                    [0, 0, 0, 0,]
                ]
            ),

            () => new Tetromino(
                "#ff0000",
                [
                    
                    [0, 0, 1, 0,],
                    [0, 0, 1, 0,],
                    [0, 1, 1, 0,],
                    [0,  0, 0, 0,]
                ]
            ),

            () => new Tetromino(
                "#ffff00",
                [
                    [0, 1, 1, 0,],
                    [0, 0, 1, 1,],
                    [0,  0, 0, 0,],
                    [0, 0, 0, 0,]
                ]
            ),

            () => new Tetromino(
                "#ffffff",
                [
                    [0, 0, 1, 0,],
                    [0, 0, 1, 0,],
                    [0,  0, 1, 0,],
                    [0, 0, 1, 0,]
                ]
            )
        ];
    }

    getTetromino(){
         const randonIndex = Math.floor(Math.random() * this.collection.length);
         return this.collection[randonIndex]();
    }
}
