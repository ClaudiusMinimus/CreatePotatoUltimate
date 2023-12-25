ServerEvents.recipes(event => {
    // Change recipes here

    // array of items to remove
    const REMOVED_ITEMS = [
        '%refinedstorage',
        'refinedstorageaddons:wireless_crafting_grid'
    ];

    // remove items in array
    REMOVED_ITEMS.forEach(id => event.remove({ output: id }));

});