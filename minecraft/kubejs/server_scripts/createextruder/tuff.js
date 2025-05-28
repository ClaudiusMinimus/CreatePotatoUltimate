ServerEvents.recipes((event) => {
  // Extrude Tuff
  event.custom({
    type: "create_mechanical_extruder:extruding",
    blockIngredients: {
      first: {
        blocks: "minecraft:deepslate",
      },
      second: {
        blocks: "minecraft:lava",
      },
    },
    result: {
      id: "minecraft:tuff",
    },
  });
});

