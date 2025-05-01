// priority: 0

console.info("Remove recipes");

ServerEvents.recipes((event) => {
  // Craft shaped end portal frame
  event.shaped("minecraft:end_portal_frame", ["SSS", "SES", "SSS"], {
    S: "minecraft:end_stone",
    E: "minecraft:ender_eye",
  });

  // craft deepslate
  event.shaped("4x minecraft:deepslate", ["TT", "TT"], {
    T: "minecraft:tuff",
  });

  // craft hanging_roots
  event.shaped("minecraft:hanging_roots", [" S ", "S S"], {
    S: "minecraft:stick",
  });

  // Craft shaped sculk catalyst
  event.shaped("minecraft:sculk_catalyst", ["SQS", "QDQ", "SQS"], {
    S: "minecraft:sculk",
    Q: "minecraft:quartz",
    D: "minecraft:diamond",
  });

  // Craft shaped rooted_dirt
  event.shaped("2x minecraft:rooted_dirt", ["HD", "DH"], {
    H: "minecraft:hanging_roots",
    D: "minecraft:dirt",
  });

  // Spawner recipe
  // event.shaped('minecraft:spawner', [
  // 	'BBB',
  // 	'BSB',
  // 	'BBB'
  // ], {
  // 	B: 'createdeco:netherite_bars',
  // 	S: 'minecraft:nether_star'
  // })

//   // Pillager spawn egg recipe
//   event.shaped("minecraft:pillager_spawn_egg", ["W", "A"], {
//     W: "minecraft:witch_spawn_egg",
//     A: "minecraft:crossbow",
//   });

//   // Evoker spawn egg recipe
//   event.shaped("minecraft:evoker_spawn_egg", ["W", "A"], {
//     W: "minecraft:pillager_spawn_egg",
//     A: "minecraft:iron_axe",
//   });
});

ServerEvents.compostableRecipes((event) => {
  event.add("silentgear:fluffy_seeds", 0.3);
  event.add("silentgear:flax_seeds", 0.3);
});

// Break Bee Nest
BlockEvents.rightClicked("minecraft:bee_nest", (event) => {
  const { player, item } = event;

  if (item.id === "powder_power:wand_alchemist" && player.isCrouching()) {
    event.block.set("minecraft:air");
    player.give("minecraft:bee_nest");
  }
});

// Break end portal frame with eye handling
BlockEvents.rightClicked("minecraft:end_portal_frame", (event) => {
  const { block, player, item } = event;

  if (item.id === "create:wrench" && player.isCrouching()) {
    // Updated property access method
    const hasEye = block.properties.eye === "true";
    event.block.set("minecraft:air");

    player.give("minecraft:end_portal_frame");
    if (hasEye) {
      player.give("minecraft:ender_eye");
    }
  }
});

// Break end portal block
BlockEvents.rightClicked("minecraft:end_portal", (event) => {
  const { player, item } = event;

  if (item.id === "create:wrench" && player.isCrouching()) {
    event.block.set("minecraft:air");
  }
});

