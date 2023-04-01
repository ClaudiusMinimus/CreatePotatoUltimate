// priority: 0

// console.info('Hello, World! (You will only see this line once in console, during startup)')

// temp commit while waiting for mod update
// StartupEvents.registry('item', event => {
// 	// Register new items here
// 	// event.create('example_item').displayName('Example Item')
// 	event.create('amethyst_mesh','createsifter:mesh').displayName('Amethyst Mesh');
// 	event.create('quartz_mesh','createsifter:mesh').displayName('Quartz Mesh');
// })

// Temp fix 
StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('amethyst_mesh','createsifter:mesh').displayName('Amethyst Mesh').parentModel("createsifter:block/meshes/custom_mesh").texture("1","kubejs:item/amethyst_mesh").texture("0","kubejs:block/coal_block");
	event.create('quartz_mesh','createsifter:mesh').displayName('Quartz Mesh').parentModel("createsifter:block/meshes/custom_mesh").texture("1","kubejs:item/quartz_mesh").texture("0","kubejs:block/coal_block");
})

// StartupEvents.registry('block', event => {
// 	// Register new blocks here
// 	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
// })
