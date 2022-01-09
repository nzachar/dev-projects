import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const LOCATIONS = [
    [1, 1],
    [2, 1],
    [3, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [1, 3],
    [2, 3],
    [3, 3],
];

function Square(props) {
    return (
        <button
            className={`square ${props.isWinner ? 'winning-square' : ''}`}
            onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square
            isWinner={this.props.winnerLines.includes(i)}
            key={i}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }
    renderSquares() {
        return this.props.squares
            .map((_value, index) => this.renderSquare(index));
    }
    render() {
        return (
            <div className="squares-layout">
                {this.renderSquares()}
            </div>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
            isDesc: true
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history.at(-1);
        const squares = [...current.squares];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: [...history, {
                squares,
                location: LOCATIONS[i]
            }],
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }
    toggle() {
        this.setState({ isDesc: !this.state.isDesc })
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
        ////#2 Possible solution
        // const listItems = document.querySelectorAll('li');
        // listItems.forEach(item => item.firstChild.classList.remove('history-move'));

        // const button = listItems[step].firstChild;
        // button.classList.add('history-move');
    }
    render() {
        const history = this.state.history;
        const currentMove = history[this.state.stepNumber];
        const winner = calculateWinner(currentMove.squares);

        let moves = history.map((step, move) => {
            const desc = move ? `Go to move # ${move}, Move location: ${step.location}` :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>
                        {move === this.state.stepNumber ? <b>{desc}</b> : desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner.player
        } else if (this.state.stepNumber > LOCATIONS.length - 1) {
            status = 'Draw'
        } else {

            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'} `;
        }

        if (!this.state.isDesc) {
            moves = [...moves.reverse()]
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winnerLines={winner?.line || []}
                        squares={currentMove.squares}
                        onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    Moves Order:
                    <button onClick={() => this.toggle()}>
                        {this.state.isDesc ? 'Descending' : 'Ascending'}
                    </button>
                    <div>{status}</div>
                    <div>{moves}</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { player: squares[a], line: lines[i] };
        }
    }
    return null;
}
