ServerEvents.recipes((event) => {

  // Sifting Dust with Andesite Mesh
  event.custom({
    type: "createsifter:sifting",
    input: {
      item: "createsifter:dust",
    },
    mesh: {
      count: 1,
      id: "createsifter:andesite_mesh",
    },
    processingTime: 500,
    results: [
      { id: "ae2:sky_dust", chance: 0.03 },
    ],
  });
});
