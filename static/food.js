
export class Food {
    constructor(width, height) {
        this.x = Math.floor(Math.random() * width),
        this.y = Math.floor(Math.random() * height)
    }
    draw(context, size) {
        context.fillStyle = 'red';
        context.fillRect(
            this.x * size,
            this.y * size,
            size,
            size
        )
    }
    reset(width, height) {
        this.x = Math.floor(Math.random() * width),
        this.y = Math.floor(Math.random() * height)
    }
}