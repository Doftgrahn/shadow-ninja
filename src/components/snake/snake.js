import React, {Component} from 'react';

import Fade from 'react-reveal/Fade';

const KEYS = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}

const DIRECTIONS = {
    left: 1,
    up: 2,
    right: 3,
    down: 4
}

const MOVEMENT = {
    left: [
        -1, 0
    ],
    up: [
        0, -1
    ],
    right: [
        1, 0
    ],
    down: [0, 1]
}

const COLORS = {
    snake: '#f7931e',
    food: '#333'
}

const initialState = {
    snake: [
        [
            8, 8
        ],
        [
            7, 8
        ],
        [
            6, 8
        ]
    ],
    foodCoordinate: null,
    loopInterval: 100,
    direction: 'right',
    size: 30,
    gameEnded: false
};

export default class Snake extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        // Learn about canvas: http://html5doctor.com/an-introduction-to-the-canvas-2d-api/
        this.canvas = this
            .refs
            .canvas
            .getContext('2d');
        this.init();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    init = () => {
        this.setState({
            ...initialState,
            foodCoordinate: this.getFoodCoordinate()
        });

        this.interval = setInterval(this.loop, this.state.loopInterval);
        this.focusDirectionInput();
    };

    loop = () => {
        this
            .canvas
            .clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.drawFood();
        this
            .state
            .snake
            .forEach(this.drawSnakePart);
        this.moveSnakeForward();

        if (this.state.gameEnded) {
            clearInterval(this.interval);
        }
    };

    getFoodCoordinate = () => {
        const canvasWidth = Math.floor(window.innerWidth / this.state.size);
        const canvasHeight = Math.floor(window.innerHeight / this.state.size);

        return ([
            Math.floor(Math.random() * canvasWidth),
            Math.floor(Math.random() * canvasHeight)
        ]);
    };

    drawFood = () => {
        const {size, foodCoordinate} = this.state;
        this.canvas.fillStyle = COLORS.food;
        this
            .canvas
            .beginPath();
        const r = size / 2;
        const x = foodCoordinate[0] * size + r;
        const y = foodCoordinate[1] * size + r;
        this
            .canvas
            .arc(x, y, r, 0, Math.PI * 2, true);
        this
            .canvas
            .fill();
    };

    drawSnakePart = (coordinate) => {
        const {size} = this.state;

        const x = size * coordinate[0];
        const y = size * coordinate[1];
        this.canvas.fillStyle = COLORS.snake;
        this
            .canvas
            .fillRect(x, y, size, size);
    };

    moveSnakeForward = () => {
        // To move a snake forward, we need to remove the last part of the tail, and add a new head.
        // In this way we mimic the movement.

        const canvasWidth = Math.floor(window.innerWidth / this.state.size);
        const canvasHeight = Math.floor(window.innerHeight / this.state.size);
        // Removes last position in the snake's tail
        const snake = this
            .state
            .snake
            .slice(0, this.state.snake.length - 1);
        const snakeHead = this
            .state
            .snake[0];
        const newHeadCoordinate = this.getHeadNextCoordinate(this.state.direction, snakeHead);

        // Checks if snake hit the border
        if (newHeadCoordinate[0] < 0 || newHeadCoordinate[1] < 0 || newHeadCoordinate[0] > canvasWidth || newHeadCoordinate[1] > canvasHeight) {
            this.setState({
                ...this.state,
                gameEnded: true
            });
        } else
        // Checks if snake will eat food in next move
        if (JSON.stringify(snakeHead) === JSON.stringify(this.state.foodCoordinate)) {
            this.setState({
                ...this.state,
                foodCoordinate: this.getFoodCoordinate(),
                // Makes snake bigger by using the snake we didn't slice
                snake: [
                    newHeadCoordinate, ...this.state.snake
                ]
            });
        } else {
            // Checks if snake's head hit tail
            snake.forEach((element) => {
                if (JSON.stringify(newHeadCoordinate) === JSON.stringify(element)) {
                    this.setState({
                        ...this.state,
                        gameEnded: true
                    });
                }
            });
            // Just moves it forward
            this.setState({
                ...this.state,
                snake: [
                    newHeadCoordinate, ...snake
                ]
            });
        }
    };

    getHeadNextCoordinate = (direction, snakeHead) => {
        return ([
            snakeHead[0] + MOVEMENT[direction][0],
            snakeHead[1] + MOVEMENT[direction][1]
        ]);
    };

    handleKeyDown = (event) => {
        event.preventDefault();
        // Avoids opposite direction
        if (Math.abs(event.which - DIRECTIONS[this.state.direction]) % 2 === 0) {
            return;
        }
        const direction = KEYS[event.which];
        this.setState({
            ...this.state,
            direction: direction || this.state.direction
        });
    };

    focusDirectionInput = () => {
        this
            .refs
            .directionInput
            .focus();
    };

    render() {
        return (<Fade>
            <main className="snake">
                <canvas ref="canvas" onClick={this.focusDirectionInput} width={window.innerWidth} height={window.innerHeight}/>
                <input ref="directionInput" type="text" onKeyDown={this.handleKeyDown} style={{
                        position: 'absolute',
                        opacity: 0,
                        width: 0,
                        height: 0
                    }}/> {
                    this.state.gameEnded && <div id="infoWrapper" className="infoWrapper">
                            <div id="playAgain" className="info" onClick={this.init}>Play again!</div>
                            <div id="score" className="info">SCORE: {this.state.snake.length - 3}
                            </div>
                        </div>
                }
            </main>
        </Fade>);
    }
}
