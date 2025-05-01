ServerEvents.recipes((event) => {
  // Sifting Gravel with Amethyst Mesh
  event.custom({
    type: "createsifter:sifting",
    input: {
      item: "minecraft:red_sand",
    },
    mesh: {
      count: 1,
      id: "kubejs:amethyst_mesh",
    },
    processingTime: 500,
    advancedSifter: true,
    results: [
      { id: "minecraft:sculk", chance: 0.1 },
      { id: "create:raw_zinc", chance: 0.2 },
      { id: "minecraft:amethyst_shard", chance: 0.1 },
      { id: "minecraft:budding_amethyst", chance: 0.01 },
      { id: "minecraft:diamond", chance: 0.03 },
      { id: "minecraft:emerald", chance: 0.04 },
      { id: "minecraft:raw_gold", chance: 0.25 },
      { id: "minecraft:raw_iron", chance: 0.35 },
      { id: "minecraft:redstone", chance: 0.3, count: 4 },
      { id: "minecraft:spore_blossom", chance: 0.01 },
      { id: "create:experience_nugget", chance: 0.15 },
      { id: "minecraft:echo_shard", chance: 0.001 },
    ],
  });
});
