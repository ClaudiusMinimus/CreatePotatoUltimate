ServerEvents.recipes((event) => {
  // Sifting Dirt with Waterlogged Zinc Mesh
  event.custom({
    type: "createsifter:sifting",
    input: {
      item: "minecraft:dirt",
    },
    mesh: {
      count: 1,
      id: "createsifter:zinc_mesh",
    },
    processingTime: 500,
    waterlogged: false,
    results: [
      { id: "minecraft:allium", chance: 0.05 },
      { id: "minecraft:azure_bluet", chance: 0.05 },
      { id: "minecraft:blue_orchid", chance: 0.05 },
      { id: "minecraft:cornflower", chance: 0.05 },
      { id: "minecraft:dandelion", chance: 0.05 },
      { id: "minecraft:orange_tulip", chance: 0.02 },
      { id: "minecraft:pink_tulip", chance: 0.02 },
      { id: "minecraft:poppy", chance: 0.05 },
      { id: "minecraft:red_tulip", chance: 0.02 },
      { id: "minecraft:white_tulip", chance: 0.02 },
      { id: "minecraft:lily_of_the_valley", chance: 0.02 },
      { id: "minecraft:lilac", chance: 0.03 },
      { id: "minecraft:peony", chance: 0.03 },
      { id: "minecraft:rose_bush", chance: 0.03 },
      { id: "minecraft:sunflower", chance: 0.03 },
    ],
  });
});
