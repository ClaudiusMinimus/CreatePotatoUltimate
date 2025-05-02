ServerEvents.recipes(event => {
    // Change recipes here

    // array of items to remove
    const REMOVED_ITEMS = [
		'ae2:charger',
		'ae2:logic_processor',
		'ae2:printed_engineering_processor',
		'ae2:printed_logic_processor',
		'ae2:printed_calculation_processor',
		'ae2:printed_silicon',
		'ae2:engineering_processor',
		'ae2:calculation_processor',
		'ae2:inscriber',
		'ae2:item_cell_housing',
		'ae2:fluid_cell_housing',
		'ae2:creative_energy_cell',
		'ae2:dense_energy_cell',
		'ae2:energy_cell',
		'ae2:cell_workbench',
		'ae2:item_storage_cell_1k',
		'ae2:item_storage_cell_4k',
		'ae2:item_storage_cell_16k',
		'ae2:item_storage_cell_64k',
		'ae2:item_storage_cell_256k',
		'ae2:fluid_storage_cell_1k',
		'ae2:fluid_storage_cell_4k',
		'ae2:fluid_storage_cell_16k',
		'ae2:fluid_storage_cell_64k',
		'ae2:fluid_storage_cell_256k',
		'ae2:view_cell',
		'ae2:formation_plane',
		'ae2:annihilation_plane',
		'ae2:molecular_assembler',
		'ae2:portable_item_cell_1k',
		'ae2:portable_item_cell_4k',
		'ae2:portable_item_cell_16k',
		'ae2:portable_item_cell_64k',
		'ae2:portable_item_cell_256k',
		'ae2:portable_fluid_cell_1k',
		'ae2:portable_fluid_cell_4k',
		'ae2:portable_fluid_cell_16k',
		'ae2:portable_fluid_cell_64k',
		'ae2:portable_fluid_cell_256k',
		'ae2:wireless_terminal',
		'ae2wtlib:wireless_pattern_access_terminal',
		'ae2wtlib:wireless_pattern_encoding_terminal',
		'ae2:energy_card'
    ];

    // remove items in array
	REMOVED_ITEMS.forEach(id => event.remove({ output: id }));

	event.remove({ id: 'ae2:charger/meteorite_compass' })
	event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
	event.remove({ id: 'ae2:inscriber/ender_dust' })
	event.remove({ id: 'ae2:inscriber/sky_stone_dust' })
	event.remove({ id: 'ae2:inscriber/fluix_dust' })
	event.remove({ id: 'ae2:inscriber/certus_quartz_dust' })
	event.remove({ id: 'ae2:inscriber/engineering_processor_press' })
	event.remove({ id: 'ae2:inscriber/calculation_processor_press' })
	event.remove({ id: 'ae2:inscriber/logic_processor_press' })
	event.remove({ id: 'ae2:inscriber/silicon_press' })
	event.remove({ id: 'ae2:network/wireless_crafting_terminal' })

	event.replaceInput(
		{ input: 'ae2:energy_cell' }, // Arg 1: the filter
		'ae2:energy_cell',            // Arg 2: the item to replace
		'createaddition:modular_accumulator'         // Arg 3: the item to replace it with
		// Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
	)

	event.shapeless('ae2:energy_card', [
		'6x createaddition:capacitor',
		'ae2:advanced_card'
	]
	)

	event.shaped('ae2:wireless_crafting_terminal', [
		'CRC',
		'CIC',
		'CWC'
	], {
		W: 'createaddition:gold_wire',
		C: 'createaddition:capacitor',
		R: 'ae2:wireless_receiver',
		I: 'ae2:crafting_terminal'
	})

	event.shapeless('ae2wtlib:wireless_pattern_encoding_terminal', [
		'ae2:wireless_crafting_terminal',
		'ae2:engineering_processor'
	]
	)

	event.shaped('ae2wtlib:wireless_pattern_encoding_terminal', [
		'CRC',
		'CIC',
		'CWC'
	], {
		W: 'createaddition:gold_wire',
		C: 'createaddition:capacitor',
		R: 'ae2:wireless_receiver',
		I: 'ae2:pattern_encoding_terminal'
	})
	event.shaped('ae2wtlib:wireless_pattern_access_terminal', [
		'CRC',
		'CIC',
		'CWC'
	], {
		W: 'createaddition:gold_wire',
		C: 'createaddition:capacitor',
		R: 'ae2:wireless_receiver',
		I: 'ae2:pattern_access_terminal'
	})
	event.shaped('ae2:wireless_terminal', [
		'CRC',
		'CIC',
		'CWC'
	], {
		W: 'createaddition:gold_wire',
		C: 'createaddition:capacitor',
		R: 'ae2:wireless_receiver',
		I: 'ae2:terminal'
	})
	//adds meteorite compass recipe
	event.custom({
		type: "createaddition:charging",
		ingredient: {  // <-- Correct key name
		  item: "minecraft:compass"
		},
		result: {
		  item: "ae2:meteorite_compass",
		  id: "ae2:meteorite_compass"  // Retain ID if required
		},
		energy: 32000
	  });
	  
	  
/* 
	event.recipes.createSequencedAssembly([
		Item.of('ae2:printed_engineering_processor').withChance(0.5),
		Item.of('minecraft:diamond').withChance(0.5)

	], 'minecraft:diamond', [
		event.recipes.createDeploying('kubejs:incomplete', ['minecraft:diamond', 'ae2:engineering_processor_press']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete').loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:printed_logic_processor').withChance(0.5),
		Item.of('minecraft:gold_ingot').withChance(0.5)
	], 'minecraft:gold_ingot', [
		event.recipes.createDeploying('kubejs:incomplete', ['minecraft:gold_ingot', 'ae2:logic_processor_press']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete').loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:printed_calculation_processor').withChance(0.5),
		Item.of('ae2:certus_quartz_crystal').withChance(0.5)
	], 'ae2:certus_quartz_crystal', [
		event.recipes.createDeploying('kubejs:incomplete', ['ae2:certus_quartz_crystal', 'ae2:calculation_processor_press']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete').loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:printed_silicon').withChance(0.5),
		Item.of('ae2:silicon').withChance(0.5)
	], 'ae2:silicon', [
		event.recipes.createDeploying('kubejs:incomplete', ['ae2:silicon', 'ae2:silicon_press']).keepHeldItem()
	]).transitionalItem('kubejs:incomplete').loops(1)

	let I = 'kubejs:incomplete_processor'
	event.recipes.createSequencedAssembly([
		Item.of('ae2:engineering_processor').withChance(0.9),
		Item.of('minecraft:redstone').withChance(0.05),
		Item.of('ae2:printed_engineering_processor').withChance(0.025),
		Item.of('ae2:printed_silicon').withChance(0.025)
	], 'minecraft:redstone', [
		event.recipes.createDeploying(I, [I, 'ae2:printed_engineering_processor']),
		event.recipes.createDeploying(I, [I, 'ae2:printed_silicon'])
	]).transitionalItem(I).loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:calculation_processor').withChance(0.9),
		Item.of('minecraft:redstone').withChance(0.05),
		Item.of('ae2:printed_calculation_processor').withChance(0.025),
		Item.of('ae2:printed_silicon').withChance(0.025)
	], 'minecraft:redstone', [
		event.recipes.createDeploying(I, [I, 'ae2:printed_calculation_processor']),
		event.recipes.createDeploying(I, [I, 'ae2:printed_silicon'])
	]).transitionalItem(I).loops(1)

	event.recipes.createSequencedAssembly([
		Item.of('ae2:logic_processor').withChance(0.9),
		Item.of('minecraft:redstone').withChance(0.05),
		Item.of('ae2:printed_logic_processor').withChance(0.025),
		Item.of('ae2:printed_silicon').withChance(0.025)
	], 'minecraft:redstone', [
		event.recipes.createDeploying(I, [I, 'ae2:printed_logic_processor']),
		event.recipes.createDeploying(I, [I, 'ae2:printed_silicon'])
	]).transitionalItem(I).loops(1)
 */
});