// checkpoint2portal
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    player1.setPosition(950, 300)
})
// checkpoint1portal
scene.onHitTile(SpriteKind.Player, 13, function (sprite) {
    player1.setPosition(830, 500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . 5 5 5 5 f 5 5 . . . . . .
        . . . . 5 5 f f f 5 5 . . . . .
        . . . . . 5 5 f 5 5 5 5 . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . 5 5 . . . . . . . .
        . . . . . . 5 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, player1, -100, 0)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . 5 5 5 5 f 5 5 . . . . . .
        . . . . 5 5 f f f 5 5 . . . . .
        . . . . . 5 5 f 5 5 5 5 . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . 5 5 . . . . . . . .
        . . . . . . 5 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 5 . . . 5 5 5 . . . . .
        . . . . 5 5 5 . 5 5 . . . . . .
        . . . . 5 5 f 5 f 5 . . . . . .
        . . . . . . 5 f 5 . . . . . . .
        . . . . . 5 f 5 f 5 5 . . . . .
        . . . . . 5 5 . 5 5 5 . . . . .
        . . . . 5 5 5 . . . 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 5 5 . . . . . . . . .
        . . . . . 5 5 5 . . . . . . . .
        . . . . . . 5 5 5 . 5 5 . . . .
        . . . . . 5 f 5 f 5 5 5 . . . .
        . . . . 5 5 5 f 5 5 5 . . . . .
        . . . 5 5 5 f 5 f 5 . . . . . .
        . . . 5 5 . 5 5 5 . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . . . 5 5 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . 5 5 5 5 f 5 5 . . . . . .
        . . . . 5 5 f f f 5 5 . . . . .
        . . . . . 5 5 f 5 5 5 5 . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . 5 5 . . . . . . . .
        . . . . . . 5 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `],
    30,
    true
    )
})
// checkpoint3
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    scene.setTile(1, img`
        c b b b b b b b b b b b b b b c
        c b b b b b b b b b b b b b b c
        c d d d d d d d d d d d d d d c
        c d d d d d d d d d d d d d d c
        c c c c c c c c c c c c c c c c
        c b b b f f f f f f f f b b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c b b c f f f f f f f f c b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f c c f b d d c
        c d d b f c c c f f f f b d d c
        c d d b c c c f f c c c b d d c
        a c c a c c c c c c c c a c c a
    `, false)
    scene.setTile(6, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, false)
    player1.say("checkpoint 3", 500)
    // doorcheck2
    scene.setTile(12, img`
        c b b b b b b b b b b b b b b c
        c b b b b b b b b b b b b b b c
        c d d d d d d d d d d d d d d c
        c d d d d d d d d d d d d d d c
        c c c c c c c c c c c c c c c c
        c b b b f c f c f f c f b b b c
        c d d b f c f c f f c f b d d c
        c d d b f c f c f f c f b d d c
        c d d b f c f c f f c f b d d c
        c d d b f c f c f f c f b d d c
        c b b c f c f c f f c f c b b c
        c d d b f c f f c f c f b d d c
        c d d b f c f f c f c f b d d c
        c d d b f c f f c f c f b d d c
        c d d b f c f f c f c f b d d c
        a c c a f c f f c f c f a c c a
    `, true)
})
// checkpoint1
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    scene.setTile(11, img`
        c b b b b b b b b b b b b b b c
        c b b b b b b b b b b b b b b c
        c d d d d d d d d d d d d d d c
        c d d d d d d d d d d d d d d c
        c c c c c c c c c c c c c c c c
        c b b b f f f f f f f f b b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c b b c f f f f f f f f c b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f c c f b d d c
        c d d b f c c c f f f f b d d c
        c d d b c c c f f c c c b d d c
        a c c a c c c c c c c c a c c a
    `, false)
    scene.setTile(8, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, false)
    player1.say("checkpoint 1", 500)
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    player1.setVelocity(0, 0)
    if (player1.vy == 0) {
        player1.vy = -155
    }
})
// checkpoint3portal
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    player1.setPosition(760, 960)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . 5 5 5 5 f 5 5 . . . . . .
        . . . . 5 5 f f f 5 5 . . . . .
        . . . . . 5 5 f 5 5 5 5 . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . 5 5 . . . . . . . .
        . . . . . . 5 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, player1, 100, 0)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . 5 5 5 5 f 5 5 . . . . . .
        . . . . 5 5 f f f 5 5 . . . . .
        . . . . . 5 5 f 5 5 5 5 . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . 5 5 . . . . . . . .
        . . . . . . 5 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 5 . . . 5 5 5 . . . . .
        . . . . 5 5 5 . 5 5 . . . . . .
        . . . . 5 5 f 5 f 5 . . . . . .
        . . . . . . 5 f 5 . . . . . . .
        . . . . . 5 f 5 f 5 5 . . . . .
        . . . . . 5 5 . 5 5 5 . . . . .
        . . . . 5 5 5 . . . 5 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 5 5 . . . . . . . . .
        . . . . . 5 5 5 . . . . . . . .
        . . . . . . 5 5 5 . 5 5 . . . .
        . . . . . 5 f 5 f 5 5 5 . . . .
        . . . . 5 5 5 f 5 5 5 . . . . .
        . . . 5 5 5 f 5 f 5 . . . . . .
        . . . 5 5 . 5 5 5 . . . . . . .
        . . . . . . . 5 5 5 . . . . . .
        . . . . . . . . 5 5 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . 5 5 5 5 f 5 5 . . . . . .
        . . . . 5 5 f f f 5 5 . . . . .
        . . . . . 5 5 f 5 5 5 5 . . . .
        . . . . . . 5 5 5 . . . . . . .
        . . . . . . 5 5 . . . . . . . .
        . . . . . . 5 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `],
    30,
    true
    )
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    player1.setPosition(40, 900)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(-1)
})
// checkpoint2
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    scene.setTile(12, img`
        c b b b b b b b b b b b b b b c
        c b b b b b b b b b b b b b b c
        c d d d d d d d d d d d d d d c
        c d d d d d d d d d d d d d d c
        c c c c c c c c c c c c c c c c
        c b b b f f f f f f f f b b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f f f f b d d c
        c b b c f f f f f f f f c b b c
        c d d b f f f f f f f f b d d c
        c d d b f f f f f c c f b d d c
        c d d b f c c c f f f f b d d c
        c d d b c c c f f c c c b d d c
        a c c a c c c c c c c c a c c a
    `, false)
    scene.setTile(7, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, false)
    player1.say("checkpoint 2", 500)
    // doorcheck1
    scene.setTile(11, img`
        c b b b b b b b b b b b b b b c
        c b b b b b b b b b b b b b b c
        c d d d d d d d d d d d d d d c
        c d d d d d d d d d d d d d d c
        c c c c c c c c c c c c c c c c
        c b b b f c f c f f c f b b b c
        c d d b f c f c f f c f b d d c
        c d d b f c f c f f c f b d d c
        c d d b f c f c f f c f b d d c
        c d d b f c f c f f c f b d d c
        c b b c f c f c f f c f c b b c
        c d d b f c f f c f c f b d d c
        c d d b f c f f c f c f b d d c
        c d d b f c f f c f c f b d d c
        c d d b f c f f c f c f b d d c
        a c c a f c f f c f c f a c c a
    `, true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.vy == 0) {
        player1.vy = -150
    } else if (player1.vy == -150) {
        player1.vy = -150
    } else {
    	
    }
})
let projectile: Sprite = null
let myEnemy: Sprite = null
let player1: Sprite = null
game.splash("arrow left/right/up to move")
game.splash("space bar = shoot right", "down key = shoot left")
game.splash("the blue things", "are checkpoints")
player1 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . f f f f f f f . . . .
    . . . . . f f f f f f f . . . .
    . . . . . f f f f f f f . . . .
    . . . . . f f f f f f f . . . .
    . . . . . f f f f f f f . . . .
    . . . . . f f f f f f f . . . .
    . . . . . f f f f f f f . . . .
    . . . . . f f f f f f f . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(player1, 120, 0)
player1.ay = 350
scene.cameraFollowSprite(player1)
scene.setTileMap(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 2 2 . . . 4 4 4 4 4 4 . . . . . 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 2 2 . . . . . . 4 4 4 . . . . . . . . . . 2 . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 2 . . . . . . . . 4 . . . . . . . . . . . 2 . 2 . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 2 2 2 . . . . . . . . 4 . . . . . . . . . . . 2 . 2 . 2 . . . . 4 4 4 4 4 4 4 . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . 2 . 2 . 2 . . . . . 4 4 4 4 4 4 . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 2 2 . . . . . . . . . . . . . . . . . . . . . . 2 . 2 . 2 . . . . . . 2 4 4 4 4 . . . . . . . . 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 2 2 2 . . . . . . . . . 3 . . . . . . . . . . . . . . 2 . 2 . . . . . . 2 4 4 4 . . . . . . . . . . . . 4 4 4 4 4 4 4
    4 4 4 4 4 2 2 . . . . . . . . . . 4 . . . . 4 . . . . . . 3 . . . . 2 . . . . . . . 4 4 . . . . . . . . . . . . . . 7 . . 4 4 4
    4 4 4 4 4 2 2 . . . . . . . . 4 2 2 2 2 2 2 4 4 4 2 2 2 2 4 4 4 4 . . . 3 . . . . . 4 4 . . . . . . . . . . . . . . 7 . . . . 2
    4 4 4 4 4 . . . . . . . 3 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 . . . . . 3 3 . . . . . . . . . . . . . . 7 . . . . 2
    4 4 4 4 . . . . . . . . 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 4 4 4 4 4 5 . . . . . . . . . . . . 7 . . . . 2
    4 4 4 4 . . . . . . . . 2 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 2 2 2 2 2 4 4 4 4 4 4 2 2 4 2 . . . . . . . . 7 . . . . 2
    4 4 4 4 . . . . . . . 4 4 4 4 4 2 2 . . . . . 2 2 2 2 2 2 2 4 4 4 4 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 2 2 2 . . . . . 7 . . . . 2
    4 4 4 2 . . . . . 3 4 4 4 4 4 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 . 7 . . . . 2
    4 4 4 2 . . . . . 4 4 4 4 4 2 . . . . . . . . . . . . . . . . 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 . 7 . . . . 2
    4 4 2 2 . . . . . 4 4 4 2 2 2 . . . . . . . . . . . . . . . . 4 4 2 . . . . . 4 2 2 4 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 . . . . 2
    4 4 . . . . . . 4 4 4 4 2 . . . . . . . . . . . . . . . . . . 4 . . . . . . . . 2 . . . . . 2 . . 4 4 4 4 4 4 4 4 4 4 4 . . . 2
    4 4 . . . . . 5 4 4 4 4 2 . . . . . . . . . . . . 3 . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . 4 4 4 4 4 4 2 4 . 2
    4 4 . . . . . 5 4 4 4 2 2 . . . . 3 . . . 4 . . . 4 2 2 2 4 . . . . . . . . . . 2 . . 3 . . . . . . . . . . . 4 4 2 4 4 4 2 . 2
    4 4 . . . . . 5 4 4 2 2 . . . . . 4 4 2 2 2 2 2 2 4 4 4 4 4 4 . . 3 . . . . 3 . . . . 2 . . . . . . . . . . . . 4 4 4 4 4 2 . 2
    4 5 . . . . . 5 4 4 2 4 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 4 4 2 2 2 4 4 4 4 4 4 4 4 4 3 . . . . . . . . . 4 4 4 4 2 . 2
    4 5 . . . . . . . 2 2 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 2 . . . . . . . . 4 4 4 4 2 . 2
    4 5 . . . . . . . 2 . . . . . . 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 2 2 4 4 8 8 8 8 2 4 4 4 2 . 2
    4 5 . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 5 . . . . 2 4 4 4 . . 2
    4 4 4 . . . . . . . . . . . 4 2 4 4 4 4 4 4 4 4 4 . . . . 2 2 2 2 2 2 2 . . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 5 . . . . 2 4 4 4 . . 2
    4 4 4 . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . 2 2 2 2 . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 5 . . . . 5 4 4 4 . . 2
    4 4 4 4 . . . . . . . . 2 4 4 4 4 4 4 4 4 4 4 2 . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 5 . . . . 5 4 4 4 . . 2
    4 4 4 4 2 3 . . . 2 2 2 2 4 4 4 4 4 4 4 4 4 4 2 . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 5 . . . . 5 4 4 . . . 2
    4 4 4 4 4 4 4 . . 2 2 2 2 2 4 4 4 4 4 4 4 4 4 2 . . . . . . . . . 3 . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . 5 4 4 . . . 2
    4 4 4 4 4 4 4 4 4 2 2 2 2 2 4 4 4 4 4 4 4 4 4 . . . . . . . . . . 4 . . . . 3 . . . . . . . . . . . . . . . . . 3 4 4 . . . . 2
    4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 4 4 4 4 4 4 4 4 . . . . . . . 4 2 2 2 2 2 2 4 4 . . . . . . . . . . . . . . . . . 4 4 4 . . . . 2
    4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 4 4 4 4 4 4 4 . . . . . 3 4 4 4 4 4 4 4 4 4 4 2 . . . . . . . . . . . . . . . 4 4 2 2 . . . . 2
    4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 4 4 4 4 4 4 4 4 . . . . 5 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . 3 2 2 2 2 . . . . . 2
    4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 4 4 4 4 4 4 5 . . . . 5 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . 4 4 2 . . . . . . . 2
    4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 4 4 4 4 4 4 5 . . . . . 2 2 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 3 . . . 4 4 2 . . . . . . . . 2
    4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 4 4 4 4 4 4 5 . . . . . 2 2 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 4 4 2 4 4 2 2 2 . . . . . . . . 2
    4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 4 4 4 4 4 4 5 . . . . . 2 2 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 4 4 4 4 2 2 . . . . . . . . 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 4 4 4 4 . . . . . . . . 2 2 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 4 4 4 4 2 2 . . . . . . . . 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 2 2 . 2 2 2 . . . . . . . . . 3 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 . . . . . . 2 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 . . 2 . . 2 . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 4 4 4 4 2 2 2 2 . . . . . . 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . 2 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 2 . . . . . 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . 3 . . 4 2 2 4 4 4 4 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 2 2 2 2 . . . . . 4 4 4 4 4 4
    4 4 4 4 4 4 . . . . . . . . . . . . . 3 . . . 4 2 4 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 2 . . . . . . 4 4 4 4 4 4
    4 4 4 4 4 . . . . . . . . . . 3 . 4 4 5 . . . 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 2 2 . . . 4 . . 4 4 4 4 4 4
    4 4 . . . . . . . . . . . . . 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 2 2 2 2 2 . . . 4 . 2 4 4 4 4 4 4
    4 . . . . . . . . . 3 2 4 4 2 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 2 2 2 2 2 . . . . 4 2 2 4 4 4 4 4 4
    4 . . . . . . . 2 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 . . . . . 2 4 2 2 4 4 4 4 4 4
    4 . . . . . 3 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . 6 . . . . . . . 2 4 2 2 4 4 4 4 4 4
    4 . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . 6 . . . . . . 2 2 4 2 4 4 4 4 4 4 4
    4 b 4 c 1 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 f . . 3 . . 3 . 3 . . . . . . . . . . . . 3 . . . 6 . . . . . . 2 2 4 4 4 4 4 4 4 4 4
    4 d 4 9 a 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 f . . 2 . . 2 . 2 . . . . . . . . . . . . 2 3 . . 6 . . 2 5 5 5 2 2 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 5 2 2 5 2 . 2 2 3 3 . 2 2 . 2 . . 2 . 2 . 6 . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 5 2 2 5 4 5 2 2 5 2 5 5 2 5 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`)
scene.setBackgroundColor(14)
scene.setTile(4, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
scene.setTile(5, img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 f f 4 4 4 4 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 f f f f f f 4 4 4 4 4
    4 4 4 4 f f f f f f f f 4 4 4 4
    4 4 4 f f f f f f f f f f 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 4 f f f f 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4
`, true)
scene.setTile(15, img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f 5 5 5 f 5 5 5 f f f f f f
    f f f 5 f f f 5 f f f f f f f f
    f f f 5 f 5 f 5 f 5 f f f f f f
    f f f 5 5 5 f 5 5 5 f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`, true)
scene.setTile(3, img`
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e
`, false)
scene.setTile(2, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`, true)
scene.setTile(8, img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, true)
scene.setTile(7, img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, true)
scene.setTile(6, img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8
`, true)
player1.setPosition(40, 900)
for (let value of scene.getTilesByType(3)) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f f f . . . . .
        . . . . . f f 4 4 4 4 f . . . .
        . . . . . f 4 4 4 4 4 4 f . . .
        . . . . f 4 4 4 4 4 4 4 f f f .
        . . . f f 4 4 4 4 4 4 4 4 4 f f
        . . . f 4 4 4 4 4 4 4 4 4 4 4 f
        . . . f 4 4 4 4 4 4 4 4 4 4 4 f
        . . f 4 4 4 4 4 4 4 4 4 4 4 4 f
        . . f 4 4 4 4 4 4 4 4 4 4 4 4 f
        . . f 4 4 4 4 4 4 4 4 4 4 4 4 f
        . . f 4 4 4 4 4 4 4 4 4 4 4 4 f
    `, SpriteKind.Enemy)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f f f f . . . . .
        . . . . . f f 4 4 4 4 f . . . .
        . . . . . f 4 4 4 4 4 4 f . . .
        . . . . f 4 4 4 4 4 4 4 f f f .
        . . . f f 4 4 4 4 4 4 4 4 4 f f
        . . . f 4 4 4 4 4 4 4 4 4 4 4 f
        . . . f 4 4 4 4 4 4 4 4 4 4 4 f
        . . f 4 4 4 4 4 4 4 4 4 4 4 4 f
        . . f 4 4 4 4 4 4 4 4 4 4 4 4 f
        . . f 4 4 4 4 4 4 4 4 4 4 4 4 f
        . . f 4 4 4 4 4 4 4 4 4 4 4 4 f
    `, SpriteKind.Enemy)
    value.place(myEnemy)
}
// doorcheck1
scene.setTile(11, img`
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c d d d d d d d d d d d d d d c
    c d d d d d d d d d d d d d d c
    c c c c c c c c c c c c c c c c
    c b b c b b b b b b b b c b b c
    c d d c b b b b b b b b c d d c
    c d d c 4 b b 5 5 b b 4 c d d c
    c d d c b e 5 b b 5 e b c d d c
    c d d c b e 4 5 5 4 e b c d d c
    c b b c 4 b 5 4 f 5 b 4 c b b c
    c d d c b b 4 4 e 4 b b c d d c
    c d d c b b e 4 4 e b b c d d c
    c d d c b b b e e b b b c d d c
    c d d c b b b b b b b b c d d c
    a c c c c c c c c c c c c c c a
`, true)
// doorcheck1portal
scene.setTile(13, img`
    . . . . . . . . . . . . . . . .
    . . . . . . 6 6 6 6 . . . . . .
    . . . . 6 6 6 5 5 6 6 6 . . . .
    . . . 7 7 7 7 6 6 6 6 6 6 . . .
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . .
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . .
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 .
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 .
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 .
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 .
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . .
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . .
    . . . 6 8 8 8 8 8 8 8 8 6 . . .
    . . . . 6 6 8 8 8 8 6 6 . . . .
    . . . . . . 6 6 6 6 . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
// doorcheck2
scene.setTile(12, img`
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c d d d d d d d d d d d d d d c
    c d d d d d d d d d d d d d d c
    c c c c c c c c c c c c c c c c
    c b b c b b b b b b b b c b b c
    c d d c b b b b b b b b c d d c
    c d d c 4 b b 5 5 b b 4 c d d c
    c d d c b e 5 b b 5 e b c d d c
    c d d c b e 4 5 5 4 e b c d d c
    c b b c 4 b 5 4 f 5 b 4 c b b c
    c d d c b b 4 4 e 4 b b c d d c
    c d d c b b e 4 4 e b b c d d c
    c d d c b b b e e b b b c d d c
    c d d c b b b b b b b b c d d c
    a c c c c c c c c c c c c c c a
`, true)
// doorcheck2portal
scene.setTile(9, img`
    . . . . . . . . . . . . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . 4 4 4 5 5 4 4 4 . . . .
    . . . 3 3 3 3 4 4 4 4 4 4 . . .
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . .
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . .
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 .
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 .
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 .
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 .
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . .
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . .
    . . . 4 2 2 2 2 2 2 2 2 4 . . .
    . . . . 4 4 2 2 2 2 4 4 . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
// doorcheck3
scene.setTile(1, img`
    c b b b b b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c d d d d d d d d d d d d d d c
    c d d d d d d d d d d d d d d c
    c c c c c c c c c c c c c c c c
    c b b c b b b b b b b b c b b c
    c d d c b b b b b b b b c d d c
    c d d c 4 b b 5 5 b b 4 c d d c
    c d d c b e 5 b b 5 e b c d d c
    c d d c b e 4 5 5 4 e b c d d c
    c b b c 4 b 5 4 f 5 b 4 c b b c
    c d d c b b 4 4 e 4 b b c d d c
    c d d c b b e 4 4 e b b c d d c
    c d d c b b b e e b b b c d d c
    c d d c b b b b b b b b c d d c
    a c c c c c c c c c c c c c c a
`, true)
// doorcheck3portal
scene.setTile(10, img`
    . . . . . . . . . . . . . . . .
    . . . . . . b b b b . . . . . .
    . . . . b b b 5 5 b b b . . . .
    . . . 5 5 5 5 b b b b b b . . .
    . . 6 5 5 5 5 9 9 9 1 1 b b . .
    . . 5 5 5 5 5 9 9 9 1 1 5 b . .
    . 6 5 5 5 5 9 9 9 9 9 5 5 b b .
    . 6 5 5 5 9 9 9 b b b b 5 b b .
    . 6 6 5 5 9 9 b b b b b b b b .
    . 6 b 5 5 9 9 b b b b b b b b .
    . . 6 9 5 5 9 b b b b b b b . .
    . . 6 9 9 5 9 9 b b b 9 b b . .
    . . . 6 9 9 9 9 9 9 9 9 b . . .
    . . . . 6 6 9 9 9 9 6 6 . . . .
    . . . . . . 6 6 6 6 . . . . . .
    . . . . . . . . . . . . . . . .
`, true)
