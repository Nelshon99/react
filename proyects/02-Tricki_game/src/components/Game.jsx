import { Square } from "./Square.jsx";
export function Game({ board, updateBoard }) {
    return (
        <section className="game">
            {
                board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {square}
                        </Square>
                    )
                })
            }
        </section>
    )

}