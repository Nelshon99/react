import { Children, useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Game } from './components/Game.jsx'




export function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    //Null (No ganador) / false empate
    const [winner, setWinner] = useState(null)



    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }



    const updateBoard = (index) => {
        //No sobreescribir la misma casilla
        if (board[index]) return
        //Actualiza el tablero
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        //
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        //Check Winner
        const newWinner = checkWinnerFrom(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false) //Empate
        }
    }
    return (
        <main className="board">
            <h1>Tricky</h1>
            <button onClick={resetGame}>Reset Juego</button>
            <Game updateBoard={updateBoard} board={board} />
            <section className='turn'>
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O} > {TURNS.O}</Square>
            </section>

            <WinnerModal resetGame={resetGame} winner={winner} />
        </main >
    )
}