import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    avalibale: boolean; // Можно ли переместиться
    id: number; // для реакт-ключей

    constructor (board: Board, x: number, y:  number, color: Colors, figure: Figure | null){
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.avalibale = false;
        this.id = Math.random();

    }
}