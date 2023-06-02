import GameManager from "./Game-Manager.js";
import TetrominoFactory from "./tetromino-factory.js";
import Square from "./square.js";

export default class arena {

    constructor(){

        this._colluns = GameManager.config.colluns;
        this._lines = GameManager.config.lines;
        this._width = this._colluns * GameManager.config.squareSize;
        this._height = this._lines * GameManager.config.squareSize;
        this.coluna = GameManager.config.squareSize;
        this.linha = GameManager.config.squareSize;
        this.position = {
        top : (GameManager.config.height - this._height) / 2,
        left : (GameManager.config.width - this._width) / 2
        }
        this._squares = [...Array(this._colluns)].map(() => [...Array(this._lines)]);
        
        this._current = new TetrominoFactory().getTetromino().setPosition(3, 0);
        this._currentPieceFallInterval = setInterval( this._currentPieceFall() ,1000);

    }

    _currentPieceFall(){

    }

    _draw(){ 
        this._drawCollun()
        this._drawLine()
        this._drawSquares()
        this._current.draw()
        this._drawBorder()
    }


    _drawBorder(){
        GameManager.context.strokeStyle = "#d9d9d9";
            GameManager.context.strokeRect(
                this.position.left,
                this.position.top,
                this._width,
                this._height
        );
    }

    _drawCollun(){

        for (let i = 1; i < this._colluns; i++) {
            GameManager.context.fillStyle = "#636363";
            GameManager.context.fillRect(
                this.position.left + this.coluna * i,
                this.position.top,
                1,
                this._height
            );
        }
    }

    _drawLine(){

        for (let i = 1; i < this._lines; i++) {
            GameManager.context.fillStyle = "#636363";
            GameManager.context.fillRect(
                this.position.left,
                this.position.top + this.linha * i,
                this._width,
                1
            );
        }
    }

    
    _drawSquares(){
        for (let i = 0; i < this._colluns; i++) {
            for (let j = 0; j < this._lines; j++) {
                if (this._squares[i][j]) {
                    this._squares[i][j].draw(
                        this.position.left + i * GameManager.config.squareSize,
                         this.position.top + j * GameManager.config.squareSize
                        )
                    }
            }  
        }   
    }
};
