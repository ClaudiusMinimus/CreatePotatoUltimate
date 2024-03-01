// priority: 0

// console.info("Hello, World! (You will see this line every time client resources reload)")

const REMOVED_JEI_ITEMS = ['wormhole:coal_generator'];

// loop over REMOVED_JEI_ITEMS array
REMOVED_JEI_ITEMS.forEach((id) => {
	// Remove recipes from JEI		
	JEIEvents.hideItems(
		('jei.hide.items', event => {
			event.hide( id )
		})	
	);
});

// Show Create Wrench can pick up End Portal Frames
JEIEvents.information (event => {
	event.addItem('create:wrench', ['An End Portal Frame can be picked up by shift-right-click on it.', '']);
});

// Show Create Wrench can pick up End Portal Frames
JEIEvents.information (event => {
	event.addItem('minecraft:end_portal_frame', ['An End Portal Frame can be picked up with a Create Wrench and by shift-right-click on it.', '']);
});

// Show Bee Nests can be obtained
JEIEvents.information (event => {
	event.addItem('minecraft:bee_nest', ['Shift right-click with your Alchemist Wand on the right flower and you might get a bee nest.', '']);
});
