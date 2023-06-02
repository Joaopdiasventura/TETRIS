import GameManager from "./Game-Manager.js";
import Square from "./square.js";

export default class Polyomino {

    constructor(squaresCount, color, format){
        this.color = color;
        this.squaresCount = squaresCount;
        this.squares = [...Array(this.squaresCount)].map(() => [...Array(this.squaresCount)]);
        this._initializeSquares(format);

    }


    _initializeSquares(format){
        for (let i = 0; i < this.squaresCount; i++) {
            for (let j = 0; j < this.squaresCount; j++) {
                if (format[i][j]) {
                    this.squares[i][j] = new Square(this.color);
                }
            }  
        }
    }

    draw(){
        for (let i = 0; i < this.squaresCount; i++) {
            for (let j = 0; j < this.squaresCount; j++) {
                if (this.squares[j][i]) {
                    this.squares[j][i].draw(
                        GameManager.arena.position.left + ( this.position.x + i) * GameManager.config.squareSize,
                        GameManager.arena.position.top + ( this.position.y +j) * GameManager.config.squareSize
                 );
                }
            }  
        }

    }

    setPosition(x, y){
        this.position = {
            x : x,
            y : y
        };
        return this;
    }

    clone(){
        return new Polyomino(
            this.squaresCount,
            this.color,
            this.squares.map(x => x.map(y => y ? 1 : 0)).setPosition(this.position.x, this.position.y));

    }


    tryMoveDown(){
        let copy  =  this.clone()
    }
}