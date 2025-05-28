/* 
ServerEvents.recipes((event) => {

  // Sifting Dust with Advanced Brass Mesh
  event.custom({
    type: "createsifter:sifting",
    input: {
      item: "createsifter:dust",
    },
    mesh: {
      count: 1,
      id: "createsifter:advanced_brass_mesh",
    },
    processingTime: 500,
    results: [
      { id: "ae2:mysterious_cube", chance: 0.005 },
    ],
  });
});

 */