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
	event.create("amethyst_mesh", "createsifter:mesh").displayName(`Amethyst Mesh`).parentModel("createsifter:block/meshes/amethyst_mesh").texture('createsifter:item/quartz_mesh')
	event.create("quartz_mesh", "createsifter:mesh").displayName(`Quartz Mesh`).parentModel("createsifter:block/meshes/quartz_mesh").texture('createsifter:item/quartz_mesh')
})

// StartupEvents.registry('block', event => {
// 	// Register new blocks here
// 	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
// })
