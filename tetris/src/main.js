import './style.css'

// 3.- board
const board = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,0,0,1,1,1,1]
]

// 4. pieza player
const piece = {
    position: { x: 5, y: 5 },
    shape: [
        [1,1],
        [1,1]
    ]
}

// piezas random
const PIECES = [        //detalle de las piezas que vamos a utilizar, esto va ha ser una array de array
    [
        [1,1],
        [1,1]
    ],
    [
        [1,1,1,1]
    ],
    [
        [0,1,0],
        [1,1,1]
    ],
    [
        [1,1,0],
        [0,1,1]
    ],
    [
        [1,0],
        [1,0],
        [1,1]
    ],
    [
        [1]   
    ]
    
]

// 1.- inicializar el canvas
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const BLOCK_SIZE = 20
const BOARD_WIDTH = 14
const BOARD_HEIGHT = 30

canvas.width = BLOCK_SIZE * BOARD_WIDTH
canvas.height = BLOCK_SIZE * BOARD_HEIGHT

context.scale(BLOCK_SIZE, BLOCK_SIZE)

// auto drop
let dropCounter = 0
let lastTime = 0
function update(time = 0) {
    const deltaTime = time - lastTime
    lastTime = time
                // funcion para que las pieces vaya bajando poco a poco
    dropCounter += deltaTime
    if(dropCounter>1000) {
        piece.position.y++
        dropCounter = 0
        if(checkCollision()) {
            piece.position.y --
            solidifyPiece()
            removeRows()
        } 
    }
    draw()
    window.requestAnimationFrame(update)

}

function draw() {
    context.fillStyle = '#000'
    context.fillRect(0, 0, canvas.width, canvas.height)
    
    board.forEach((row, y) =>{
        row.forEach((value, x) => {
            if (value == 1) {
                context.fillStyle = 'yellow'
                context.fillRect(x, y, 1, 1)
            }
        })
    })

    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value) {
                context.fillStyle = 'red'
                context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1)
            }
        })
    })
}

//controla los movimientos
document.addEventListener('keydown', event => {
    if (event.key == 'ArrowLeft') {
        piece.position.x--
        if (checkCollision()) {
            piece.position.x++
        }
    }
    if (event.key == 'ArrowRight') {
        piece.position.x++
        if (checkCollision()) {
            piece.position.x--
        }
    }
    if (event.key == 'ArrowDown') { 
        piece.position.y++
        if (checkCollision()) {
            piece.position.y--
            solidifyPiece()
            removeRows()
        }
    }
    if (event.key == 'ArrowUp') {
        const rotated = []
        for
    }

})

function checkCollision () {
    return piece.shape.find((row, y) => {
        return  row.find((value, x) => {
            return (
                value != 0 &&
                board[y + piece.position.y]?.[x + piece.position.x] != 0 //controla que no se vaya fuera del panel por la parte baja del panel
            )
        })
    })
}

function solidifyPiece () {
    piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value == 1) {
                board[y + piece.position.y][x + piece.position.x] = 1
            }
        })      
    })

    //reset position
    piece.position.x = Math.floor(BOARD_WIDTH / 2 -2)
    piece.position.y = 0

    //get random shape
    piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)]

    //gameover
    if(checkCollision()) {
        window.alert('Fin de juego!!!!')
        board.forEach((row) => row.fill(0))
    }
}

function removeRows() {
    const rowsToRemove = []

    board.forEach((row, y) => {
        if(row.every(value => value == 1)) {
            rowsToRemove.push(y)
        }
    })
    //accion para eliminar esa line
    rowsToRemove.forEach(y => {
        board.splice(y, 1)
        const newRow = Array(BOARD_WIDTH).fill(0)
        board.unshift(newRow)
    })
}

update()



