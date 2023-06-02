import GameManager from "./Game-Manager.js";

export default class Square {

    constructor(color){
        this._color = color;
    }

    draw(x, y){
        GameManager.context.fillStyle = this._color
        GameManager.context.fillRect (
            x + (1 / 2),
            y,
            GameManager.config.squareSize,
            GameManager.config.squareSize
        )

        GameManager.context.strokeStyle = this._color
        GameManager.context.strokeRect (
            x + (1 / 2),
            y,
            GameManager.config.squareSize,
            GameManager.config.squareSize
        )

    }



}   