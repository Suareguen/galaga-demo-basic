let board = document.getElementById('board')
let wall = document.getElementById('wall')
let player = new Player(225, 750, board)
let timerId
let spawnId
let enemies = []
let lastEnemySpawnTime = Date.now();
let enemySpawnInterval = 3000; // 3000 milisegundos = 3 segundos entre cada generación de enemigos

// function gameStart() {
//     player.insertPlayer()
//     timerId = setInterval(movePlayer, 25)
//     // spawnId = setInterval(createEnemies, 3000)
// }


function gameStart() {
    player.insertPlayer();
    function gameLoop() {
        movePlayer()
        let currentTime = Date.now();
        if (currentTime - lastEnemySpawnTime > enemySpawnInterval) {
            createEnemies();
            lastEnemySpawnTime = currentTime;
        }
        requestAnimationFrame(gameLoop)
    }
    gameLoop()
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
            if (player.y >= 750) { // Asegúrate de ajustar este valor según el suelo de tu juego
                player.velocityY = -20 // Ajusta este valor para cambiar la fuerza del salto
            }
            break
        case 'm':
            let bullet = new Bullet(player.x + player.width / 2 - 10, player.y - 20, board, enemies)
            bullet.insertBullet()
            player.direction = 1
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