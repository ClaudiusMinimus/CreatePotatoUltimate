ServerEvents.recipes((event) => {
  // Extrude Calcite
  event.custom({
    type: "create_mechanical_extruder:extruding",
    blockIngredients: {
      first: {
        blocks: "minecraft:bone_block",
      },
      second: {
        blocks: "minecraft:lava",
      },
    },
    result: {
      id: "minecraft:calcite",
    },
  });
});

