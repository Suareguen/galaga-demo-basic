function Bullet(x, y, board, enemies) {
    let self = this
    this.x = x
    this.y = y
    this.speed = 5
    this.direction = -1
    this.width = 10
    this.height = 10
    this.sprite = document.createElement('div')


    this.insertBullet = function () {
        this.sprite.setAttribute('class', 'bullet')
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        board.appendChild(this.sprite)
    }

    this.move = function () {
        self.checkCollision()
        let moveInY = self.y + self.speed * self.direction
        if (moveInY >= 0 && moveInY <= 750) {
            self.y = moveInY
            self.sprite.style.top = self.y + 'px'
        }

        if (moveInY <= 0) {
            self.removeBullet()
        }
    }

    this.removeBullet = function () {
        clearInterval(this.timerId)
        board.removeChild(this.sprite)
    }

    this.checkCollision = function () {
        enemies.forEach(function (enemy, idx) {
            if (self.x < enemy.x + enemy.width &&
                self.y < enemy.y + enemy.height &&
                self.x + self.width > enemy.x &&
                self.y + self.height > enemy.y) {
                enemy.removeEnemy(idx)
                self.removeBullet()
            }
        })
    }

    this.timerId = setInterval(this.move, 50)
}