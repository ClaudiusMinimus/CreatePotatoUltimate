ServerEvents.recipes((event) => {

  // Sifting Leaves with Andesite Mesh
  event.custom({
    type: "createsifter:sifting",
    input: {
      tag: "minecraft:leaves",
    },
    mesh: {
      count: 1,
      id: "createsifter:andesite_mesh",
    },
    processingTime: 500,
    results: [
      { id: "minecraft:mangrove_propagule", chance: 0.02 },
      { id: "minecraft:cocoa_beans", chance: 0.02 },
    ],
  });
});
