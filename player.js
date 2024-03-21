function Player(x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.speed = 5
    this.direction = 0
    this.width = 50
    this.height = 50
    this.isDead = false
    this.sprite = document.createElement('div')
    // this.directionY = 0

    this.insertPlayer = function () {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        board.appendChild(this.sprite)
    }

    this.move = function () {
        let moveInX = self.x + self.speed * self.direction
        // let moveInY = self.y + self.speed * self.directionY
        if (moveInX >= 0 && moveInX <= 450) {
            self.x = moveInX
            self.sprite.style.left = self.x + 'px'
        }
        // if (moveInY >= 0 && moveInY <= 750) {
        //     self.y = moveInY
        //     self.sprite.style.top = self.y + 'px'
        // }
    }
}