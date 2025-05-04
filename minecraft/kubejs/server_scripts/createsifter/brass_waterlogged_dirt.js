ServerEvents.recipes((event) => {

  // Sifting Dirt with Waterlogged Brass Mesh
  event.custom({
    type: "createsifter:sifting",
    input: {
      item: "minecraft:dirt",
    },
    mesh: {
      count: 1,
      id: "createsifter:brass_mesh",
    },
    processingTime: 500,
    waterlogged: true,
    results: [
      { id: "minecraft:sponge", chance: 0.02 },
      { id: "minecraft:big_dripleaf", chance: 0.02 },
      { id: "minecraft:brain_coral_block", chance: 0.05 },
      { id: "minecraft:bubble_coral_block", chance: 0.05 },
      { id: "minecraft:fire_coral_block", chance: 0.05 },
      { id: "minecraft:horn_coral_block", chance: 0.05 },
      { id: "minecraft:tube_coral_block", chance: 0.05 },
      { id: "minecraft:brain_coral_fan", chance: 0.01 },
      { id: "minecraft:bubble_coral_fan", chance: 0.01 },
      { id: "minecraft:fire_coral_fan", chance: 0.01 },
      { id: "minecraft:horn_coral_fan", chance: 0.01 },
      { id: "minecraft:tube_coral_fan", chance: 0.01 },
      { id: "minecraft:sea_pickle", chance: 0.03 },
    ],
  });
});
