// priority: 0

console.info("Remove recipes");

ServerEvents.recipes(event => {
	// Change recipes here

	// array of items to remove
	const REMOVED_ITEMS = ['angelring:leadstone_angel_ring','angelring:hardened_angel_ring','angelring:reinforced_angel_ring','angelring:resonant_angel_ring','angelring:energetic_angel_ring'];

	// remove items in array
	REMOVED_ITEMS.forEach(id => event.remove({ output: id }));

});

console.info("Remove reciped");

ServerEvents.recipes(event => {

	// Craft shaped end portal frame	
	event.shaped('minecraft:end_portal_frame', [
		'SSS',
		'SES',
		'SSS'
	], {
		S: 'minecraft:end_stone',
		E: 'minecraft:ender_eye'
	})

	// craft deepslate
	event.shaped('4x minecraft:deepslate', [
		'TT',
		'TT'
	], {
		T: 'minecraft:tuff'
	})

	// craft hanging_roots
	event.shaped('minecraft:hanging_roots', [
		' S ',
		'S S'
	], {
		S: 'minecraft:stick'
	})

	//  - minecraft:sculk_catalyst craft (4 x sculk) + 1 diamond + (4 x quartz) = 1 x sculk_catalyst
	// Craft shaped sculk catalyst 	
	event.shaped('minecraft:sculk_catalyst', [
		'SQS',
		'QDQ',
		'SQS'
	], {
		S: 'minecraft:sculk',
		Q: 'minecraft:quartz',
		D: 'minecraft:diamond'
	})

	// Craft shaped rooted_dirt 	
	event.shaped('2x minecraft:rooted_dirt', [
		'HD',
		'DH'
	], {
		H: 'minecraft:hanging_roots',
		D: 'minecraft:dirt'
	})

	// Spawner recipe
	event.shaped('minecraft:spawner', [
		'BBB',
		'BSB',
		'BBB'
	], {
		B: 'createdeco:netherite_bars',
		S: 'minecraft:nether_star'
	})

	// Pillager spawn egg recipe
	event.shaped('minecraft:pillager_spawn_egg', [
		'W',
		'A'
	], {
		W: 'minecraft:witch_spawn_egg',
		A: 'minecraft:crossbow'
	})

	// Evoker spawn egg recipe
	event.shaped('minecraft:evoker_spawn_egg', [
		'W',
		'A'
	], {
		W: 'minecraft:pillager_spawn_egg',
		A: 'minecraft:iron_axe'
	})

});

// provides a way to get a minecraft:bee_nest
BlockEvents.rightClicked("block.right_click", (event) => {
	const { block, hand, item, player } = event;
	if (hand.name() != "MAIN_HAND") return;

	if (item == "powder_power:wand_alchemist" && player.isCrouching()) {
		if (block.equals("minecraft:sunflower")) {
			block.set("minecraft:air");
			player.give("minecraft:bee_nest");
		}
	}

});


// allow player to pick up an end portal frame
BlockEvents.rightClicked("block.right_click", (event) => {
	const { block, hand, item, world, player } = event;
	if (hand.name() != "MAIN_HAND") return;

	if (item == "create:wrench" && player.isCrouching()) {
		if (block.equals("minecraft:end_portal_frame")) {
			const hasEnderEye = block.properties.eye;
			block.set("minecraft:air");
			player.give("minecraft:end_portal_frame");
			if (hasEnderEye == "true") {
				player.give("minecraft:ender_eye");
			}
		}
	}

});

// allow player to break an end portal
BlockEvents.rightClicked("block.right_click", (event) => {
	const { block, hand, item, world, player } = event;
	if (hand.name() != "MAIN_HAND") return;

	if (item == "create:wrench" && player.isCrouching()) {
		if (block.equals("minecraft:end_portal")) {
			block.set("minecraft:air");
		}
	}

});