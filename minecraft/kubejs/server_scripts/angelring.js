ServerEvents.recipes(event => {

	// delete old angel ring recipe
    event.remove({ output: 'angelring:angel_ring' })
    
    // new angel ring recipe
	event.shaped('angelring:angel_ring', [
		'EGE',
		'BRB',
		'NBN'
	], {
		G: 'botania:life_essence',
		E: 'minecraft:elytra',
        N: 'minecraft:nether_star',
        B: 'botania:blaze_block',
        R: 'angelring:diamond_ring'
	})

});