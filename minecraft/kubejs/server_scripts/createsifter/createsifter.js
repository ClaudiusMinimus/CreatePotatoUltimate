ServerEvents.recipes((event) => {
  // Craft Zinc Mesh
  event.shaped("createsifter:zinc_mesh", ["SSS", "SZS", "SSS"], {
    S: "minecraft:stick",
    Z: "create:zinc_ingot",
  });

  // Craft Amethyst Mesh
  event.shaped("kubejs:amethyst_mesh", ["SSS", "SAS", "SSS"], {
    S: "minecraft:stick",
    A: "minecraft:amethyst_shard",
  });

  // Craft Quartz Mesh
  event.shaped("kubejs:quartz_mesh", ["SSS", "SQS", "SSS"], {
    S: "minecraft:stick",
    Q: "minecraft:quartz",
  });
});
