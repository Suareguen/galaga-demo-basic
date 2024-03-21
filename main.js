let board = document.getElementById('board')

let player = new Player(225, 750, board)
let timerId
let spawnId
let enemies = []

function gameStart() {
    player.insertPlayer()
    timerId = setInterval(movePlayer, 25)
    spawnId = setInterval(createEnemies, 3000)
}



function movePlayer() {
    if (player.isDead === false) {
        player.move()
    }
    else {
        clearInterval(timerId)
        clearInterval(spawnId)
        enemies.forEach(function (enemy) {
            clearInterval(enemy.timerId)
        })
        // window.alert('Game Over!!!')
    }
}


function createEnemies() {
    let coordX = Math.floor(Math.random() * 10) * 50
    let enemy = new Enemy(coordX, 0, board, enemies)
    enemy.insertEnemy()
    enemies.push(enemy)
}

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a':
            player.direction = - 1
            // player.move()
            break
        case 'd':
            player.direction = 1
            break
        case ' ':
            let bullet = new Bullet(player.x + player.width / 2 - 10, player.y - 20, board, enemies)
            bullet.insertBullet()
            break
        // player.move()
        // case 'w':
        //     player.directionY = - 1
        //     // player.move()
        //     break
        // case 's':
        //     player.directionY = 1
        //     // player.move()
        //     break
    }
})

window.addEventListener('keyup', function (e) {
    player.direction = 0
    // player.directionY = 0
})

gameStart()