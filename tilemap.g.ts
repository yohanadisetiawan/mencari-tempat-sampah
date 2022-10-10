// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001060606060606060609060609060602070a0909090909090a090a0a0a0a0908090a0a0a0a090a0a0a090a0909090909070a0a0a0a090a0a0a090a090a0a0a08090909090a09090909090a090a090908070a0a0a0a0a0a0a0a090a0a0a090a08070a0909090909090a090a0a0a090a08070a090a0a0a0a090a0a0a0909090a08070a090a09090a09090909090a0a0a0c090a0909090a0a090a0a0a0a0a0a09080b0a0a0a090a09090a0909090a0a0908090a0909090a090a0a090a0a0a0a0908070a090a0a0a090a0a090a0a09090908070a090a0a0909090909090a0a090a08070a0a0a0a0a0a090a0a0a0a0a090a0803090505090505050505090505090504`, img`
. . . . . . . . . 2 . . 2 . . . 
. . 2 2 2 2 2 2 . 2 . . . . 2 . 
2 . . . . 2 . . . 2 . 2 2 2 2 2 
. . . . . 2 . . . 2 . 2 . . . . 
2 2 2 2 . 2 2 2 2 2 . 2 . 2 2 . 
. . . . . . . . . 2 . . . 2 . . 
. . 2 2 2 2 2 2 . 2 . . . 2 . . 
. . 2 . . . . 2 . . . 2 2 2 . . 
. . 2 . 2 2 . 2 2 2 2 2 . . . . 
2 . 2 2 2 . . 2 . . . . . . 2 . 
. . . . 2 . 2 2 . 2 2 2 . . 2 . 
2 . 2 2 2 . 2 . . 2 . . . . 2 . 
. . 2 . . . 2 . . 2 . . 2 2 2 . 
. . 2 . . 2 2 2 2 2 2 . . 2 . . 
. . . . . . . 2 . . . . . 2 . . 
. 2 . . 2 . . . . . 2 . . 2 . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
