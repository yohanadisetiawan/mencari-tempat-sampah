def on_up_pressed():
    animation.run_image_animation(Pelajar, assets.animation("""
        PradityaUp
    """), 100, True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_destroyed(sprite):
    global Makanan
    Makanan = sprites.create(assets.image("""
        LogoSMPN2Ktd
    """), SpriteKind.food)
    Makanan.set_position(randint(0, 250), randint(0, 250))
sprites.on_destroyed(SpriteKind.food, on_on_destroyed)

def on_left_pressed():
    animation.run_image_animation(Pelajar,
        assets.animation("""
            PradityaLeft
        """),
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_countdown_end():
    game.over(False, effects.dissolve)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite4, otherSprite2):
    music.wawawawaa.play()
    Pelajar.say_text("Lari...", 200, True)
    Petugas.destroy(effects.fire, 1000)
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite):
    music.ba_ding.play()
    Makanan.destroy(effects.spray, 500)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_right_pressed():
    animation.run_image_animation(Pelajar,
        assets.animation("""
            PradityaRight
        """),
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile(sprite3, location):
    music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
            5000,
            1,
            255,
            0,
            260,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.UNTIL_DONE)
    game.over(True, effects.star_field)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile)

def on_down_pressed():
    animation.run_image_animation(Pelajar,
        assets.animation("""
            PradityaDown
        """),
        100,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_on_score():
    if info.score() % 3 == 0:
        info.change_life_by(1)
info.on_score(3, on_on_score)

def on_overlap_tile2(sprite5, location2):
    Petugas.x += -50
scene.on_overlap_tile(SpriteKind.food,
    sprites.builtin.forest_tiles0,
    on_overlap_tile2)

Petugas: Sprite = None
Pelajar: Sprite = None
Makanan: Sprite = None
game.set_dialog_frame(img("""
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
"""))
game.show_long_text("Mencari lokasi tempat membuang sampah di Sekolah\\nOleh: Yohan A.S.\\nSMPN 2 Kalitidu\\nBojonegoro\\nJawa Timur-Indonesia",
    DialogLayout.FULL)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
info.start_countdown(60)
Makanan = sprites.create(assets.image("""
    LogoSMPN2Ktd
"""), SpriteKind.food)
Makanan.set_position(10, 18)
Pelajar = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Pelajar)
info.set_life(3)
info.set_score(0)
tiles.place_on_random_tile(Pelajar, sprites.dungeon.collectible_blue_crystal)
scene.camera_follow_sprite(Pelajar)

def on_update_interval():
    global Petugas
    Petugas = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    Petugas.set_velocity(randint(0, 80), randint(0, 80))
    Petugas.set_position(randint(0, 250), randint(0, 250))
    if Petugas.vx > 1:
        animation.run_image_animation(Petugas,
            assets.animation("""
                PradityaRight0
            """),
            500,
            True)
    elif Petugas.vx < -1:
        animation.run_image_animation(Petugas,
            assets.animation("""
                PradityaLeft0
            """),
            500,
            False)
    Petugas.set_flag(SpriteFlag.DESTROY_ON_WALL, True)
game.on_update_interval(1000, on_update_interval)

def on_forever():
    music.play_melody("E B C5 A B G A F ", 120)
forever(on_forever)
