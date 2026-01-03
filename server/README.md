# README

## Default World (Sky World)

The default type of world is specified on line 27 of server.properties file as shown below:

`level-type=skyblockbuilder\:skyblock`

## Normal Over World

If you want to create a normal over world, use line 26 and with the level-type blank.

`# level-type=`

## Stone World

If you want a stone block type of world, it might be easiest to create the world locally and then test it. If everything is as you wish, then upload it to your server.

### IMPORTANT

It is very important to check the file, 
`minecraft/config/skyblockbuilder/world.json5` and make sure surface is set to true `"surface": true,` This can also be changed within the Minecraft client as shown on the Wiki page, [Update "surface" Setting](https://claudiusminimuss-organization.gitbook.io/create-on-a-potato-pc-ultimate/upgrade-information/update-surface-setting
)
