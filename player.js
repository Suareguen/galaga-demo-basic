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
    this.velocityY = 0
    this.gravity = 0.8

    this.insertPlayer = function () {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        board.appendChild(this.sprite)
    }

    this.move = function () {
        // Aplicar gravedad a la velocidad vertical
        self.velocityY += self.gravity

        // Calcular nueva posición
        let moveInX = self.x + self.speed * self.direction
        let moveInY = self.y + self.velocityY

        // Verificar límites horizontales como antes
        if (moveInX >= 0 && moveInX <= 450) {
            self.x = moveInX
            self.sprite.style.left = self.x + 'px'
        }

        // Actualizar posición vertical con gravedad
        if (moveInY >= 0 && moveInY <= 750) { // Asegúrate de ajustar '750' según los límites de tu juego
            self.y = moveInY
        } else {
            // Opcional: Detener la caída al llegar al límite
            self.velocityY = 0
        }
        self.sprite.style.top = self.y + 'px'
    }
}