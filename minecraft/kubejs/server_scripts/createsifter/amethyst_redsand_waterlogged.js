ServerEvents.recipes((event) => {
  // Sifting Gravel with Amethyst Mesh
  event.custom({
    type: "createsifter:sifting",
    advancedSifter: true,
    input: {
      item: "minecraft:red_sand",
    },
    mesh: {
      count: 1,
      id: "kubejs:amethyst_mesh",
    },
    processingTime: 500,
    waterlogged: true,
    results: [{ id: "minecraft:heart_of_the_sea", chance: 0.001 }],
  });
});
