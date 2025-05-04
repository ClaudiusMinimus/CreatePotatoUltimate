ServerEvents.recipes((event) => {

  // Sifting Dirt with Waterlogged String Mesh
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
    waterlogged: true,
    results: [
      { id: "minecraft:lily_pad", chance: 0.02 },
      { id: "minecraft:vine", chance: 0.02 },
    ],
  });
});
