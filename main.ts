scene.onOverlapTile(SpriteKind.Food, sprites.builtin.forestTiles0, function (sprite5, location2) {
    Petugas.x += -50
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pelajar,
    assets.animation`PradityaUp`,
    100,
    true
    )
})
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    Makanan = sprites.create(assets.image`LogoSMPN2Ktd`, SpriteKind.Food)
    Makanan.setPosition(randint(0, 250), randint(0, 250))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pelajar,
    assets.animation`PradityaLeft`,
    100,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite4, otherSprite2) {
    music.wawawawaa.play()
    Pelajar.sayText("Lari...", 200, true)
    Petugas.destroy(effects.fire, 1000)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite2, otherSprite) {
    music.baDing.play()
    Makanan.destroy(effects.spray, 500)
    info.changeScoreBy(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pelajar,
    assets.animation`PradityaRight`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite3, location) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 0, 260, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    game.over(true, effects.starField)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Pelajar,
    assets.animation`PradityaDown`,
    100,
    true
    )
})
info.onScore(3, function () {
    if (info.score() % 3 == 0) {
        info.changeLifeBy(1)
    }
})
let Petugas: Sprite = null
let Pelajar: Sprite = null
let Makanan: Sprite = null
game.setDialogFrame(img`
    999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999
    999911119999119991111999111199999999119999999999
    999111111191111911111191111119911191111991111999
    999111111111111111111111111111111111111911111199
    999111111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999991111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111119999
    999111111111111111111111111111111111111111111999
    999911111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111119999
    999111111111111111111111111111111111111111111999
    99d1111111111111111111111111111111111dd111111199
    9ddd111111111111111111111111111111111dd111111199
    9ddd1111111111dd111111111111111111111dd1111dd199
    9d1d111111111ddddd11111111111ddddd111ddd111ddd99
    9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
    9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
    9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
    9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
    dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
    dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
    dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
    dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
    ddddddddddddddddddddddd1dddddddddddddddddddddddd
    ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
    .dddddddddddddddddddddddddddddddddddddddddddddd.
    ..dddddddddddddddddddddddddddddddddddddddddddd..
    `)
game.showLongText("Mencari lokasi tempat membuang sampah di Sekolah\\nOleh: Yohan A.S.\\nSMPN 2 Kalitidu\\nBojonegoro\\nJawa Timur-Indonesia", DialogLayout.Full)
game.showLongText("" + game.askForString("Nama Pemain:", 12) + "!, carilah titik akhir tempat sampah selama 60 detik.\\nKumpulkan poin untuk menambah nyawa setelah mendapat 3 poin, dengan mencari lambang sekolah.", DialogLayout.Full)
game.showLongText(" Hindari Penjaga agar nyawa tidak berkurang.\\nSelamat bermain jangan lupa berdoa terlebih dahulu!", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(60)
Makanan = sprites.create(assets.image`LogoSMPN2Ktd`, SpriteKind.Food)
Makanan.setPosition(10, 18)
Pelajar = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Pelajar)
info.setLife(3)
info.setScore(0)
tiles.placeOnRandomTile(Pelajar, sprites.dungeon.collectibleBlueCrystal)
scene.cameraFollowSprite(Pelajar)
game.onUpdateInterval(1000, function () {
    Petugas = sprites.create(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 5 c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c b c 5 5 5 5 c c c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . f 5 5 5 b b b b 5 5 5 c . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 5 b b 5 b f b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Enemy)
    Petugas.setVelocity(randint(0, 80), randint(0, 80))
    Petugas.setPosition(randint(0, 250), randint(0, 250))
    if (Petugas.vx > 1) {
        animation.runImageAnimation(
        Petugas,
        assets.animation`PradityaRight0`,
        500,
        true
        )
    } else if (Petugas.vx < -1) {
        animation.runImageAnimation(
        Petugas,
        assets.animation`PradityaLeft0`,
        500,
        true
        )
    }
    Petugas.setFlag(SpriteFlag.DestroyOnWall, true)
})
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
