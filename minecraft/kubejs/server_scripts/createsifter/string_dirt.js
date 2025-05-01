ServerEvents.recipes((event) => {

  // Sifting Dirt with String Mesh
  event.custom({
    type: "createsifter:sifting",
    input: {
      item: "minecraft:dirt",
    },
    mesh: {
      count: 1,
      id: "createsifter:string_mesh",
    },
    processingTime: 500,
    results: [
      { id: "silentgear:fluffy_seeds", chance: 0.05 },
      { id: "silentgear:flax_seeds", chance: 0.05 },
      { id: "farmersdelight:cabbage_seeds", chance: 0.05 },
      { id: "farmersdelight:rice", chance: 0.05 },
      { id: "farmersdelight:tomato_seeds", chance: 0.05 },
      { id: "farmersdelight:onion", chance: 0.05 },
    ],
  });
});
