const REMOVED_ITEMS = [
    'ae2:charger',
    'ae2:facade',
    'ae2:inscriber',
    'ae2:item_cell_housing',
    'ae2:fluid_cell_housing',
    'ae2:creative_energy_cell',
    'ae2:dense_energy_cell',
    'ae2:energy_cell',
    'ae2:cell_workbench',
    'ae2:creative_item_cell',
    'ae2:creative_fluid_cell',
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
    'ae2:portable_fluid_cell_256k'
];

// loop over REMOVED_ITEMS array
REMOVED_ITEMS.forEach((id) => {
    // Remove recipes from JEI		
    JEIEvents.hideItems(
        ('jei.hide.items', event => {
            event.hide(id)
        })
    );
});