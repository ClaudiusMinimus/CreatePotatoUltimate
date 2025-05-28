ServerEvents.recipes((event) => {
  // Extrude Veridium
  event.custom({
      "type": "create_mechanical_extruder:extruding",
  "blockIngredients": {
    "first": {
      "blocks": "minecraft:weathered_copper"
    },
    "second": {
      "blocks": "minecraft:lava"
    }
  },
  "result": {
    "id": "create:veridium"
  },
  });
});
