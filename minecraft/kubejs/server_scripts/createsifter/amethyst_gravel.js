ServerEvents.recipes((event) => {

    // Sifting Gravel with Amethyst Mesh
    event.custom({
            type: "createsifter:sifting",
    input: {
      item: "minecraft:gravel",
    },
    mesh: {
      count: 1,
      id: "kubejs:amethyst_mesh",
    },
    processingTime: 500,
    advancedSifter: true,
    results: [
            {"id": "create:raw_zinc", "chance": 0.15},
            {"id": "minecraft:amethyst_shard", "chance": 0.15},
            {"id": "minecraft:diamond", "chance": 0.08},
            {"id": "minecraft:emerald", "chance": 0.03},
            {"id": "minecraft:pointed_dripstone", "chance": 0.02},
            {"id": "minecraft:raw_copper", "chance": 0.25},
            {"id": "minecraft:raw_gold", "chance": 0.1},
            {"id": "minecraft:raw_iron", "chance": 0.2},
            {"id": "create:experience_nugget", "chance": 0.15}
          ]
    });
  });
