# Create Sifting


A simple sifter for the amazing create mod. This mod it's meant to be used in modpacks. Only contains very basic ore recipes.

Heavily inspired on ex nihilo sieve.

## Meshes
> Works with the sifter or in hand (like create sandpaper) - Tiers: String, Andesite, Zinc, Brass - When in hand it sifts the block in the off-hand.

## Sifter
> Automated sifting. Based on the Millstone block works more or less in the same way. You can toss items on top or feed it with any item automated way (hoppers, funnels, chute...) - Right Click with a mesh to add it. - Recipes can have a mesh, but it's not required.

## Waterlogged feature
Sifters can be waterlogged to get different output.
In hand meshes act as waterlogged when the player is in a LiquidBlock
Sifting recipes
Put the mesh and the siftable block in the ingredients, in any order.
results is a list of items
Default processingTime is 200. You can override this value in the recipe.
Default waterlogged is false. You can override this value in the recipe.

Thanks to the Creators of Create.
Code inspiration from Create Craft & Additions and the Create mod itself.

## KubeJS 6 integration (tested with 1902.6.0-build.121 version)

For minecraft 1.19.2

KubeJS 6 is in a very active development phase. Breaking changes may happen... be patient plz. I'll try to keep up with updates.
withChance method needs toJson to work properly.

Adding recipes (server script)

// event.recipes.createsifterSifting(output[], input[]) // Optional .waterlogged() .processingTime(int time)

// Basic Example event.recipes.createsifterSifting([Item.of('minecraft:clay').withChance(0.5).toJson(),Item.of('minecraft:redstone').withChance(0.1).toJson()], ['minecraft:sand','createsifter:string_mesh'])

// Waterlogged example event.recipes.createsifterSifting([Item.of('minecraft:clay').withChance(0.5).toJson()], ['minecraft:sand','createsifter:string_mesh']).waterlogged()

// Custom mesh example. Custom mesh ID comes from the Startup Script event.recipes.createsifterSifting([Item.of('minecraft:glowstonedust').withChance(0.5).toJson(),Item.of('minecraft:redstone').withChance(0.1).toJson()], ['minecraft:sand','kubejs:examplemesh'])

Adding custom meshes (startup script)

event.create('example_mesh','createsifter:mesh').displayName('Example mesh')

