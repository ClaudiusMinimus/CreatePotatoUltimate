ServerEvents.recipes((event) => {

  // Sifting Dirt with Andesite Mesh
  event.custom({
    type: "createsifter:sifting",
    input: {
      item: "minecraft:dirt",
    },
    mesh: {
      count: 1,
      id: "createsifter:andesite_mesh",
    },
    processingTime: 500,
    results: [
      { id: "silentgear:fluffy_seeds", chance: 0.1 },
      { id: "silentgear:flax_seeds", chance: 0.1 },
      { id: "farmersdelight:cabbage_seeds", chance: 0.1 },
      { id: "farmersdelight:rice", chance: 0.1 },
      { id: "farmersdelight:tomato_seeds", chance: 0.1 },
      { id: "farmersdelight:onion", chance: 0.1 },
      { id: "minecraft:torchflower_seeds", chance: 0.02 },
    ],
  });
});
