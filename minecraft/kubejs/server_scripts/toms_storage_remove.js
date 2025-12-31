// kubejs/server_scripts/toms_storage_remove.js

ServerEvents.recipes(event => {
  const blocked = [
    'toms_storage:inventory_proxy',
    'toms_storage:inventory_cable_connector_framed',
    'toms_storage:inventory_cable_connector',
    'toms_storage:filing_cabinet',
    'toms_storage:inventory_interface',
    'toms_storage:inventory_configurator',
    'toms_storage:tag_item_filter',
    'toms_storage:polymorphic_item_filter',
    'toms_storage:item_filter',
    'toms_storage:paint_kit',
    'toms_storage:basic_inventory_hopper',
    'toms_storage:inventory_cable_framed',
    'toms_storage:inventory_cable',
    'toms_storage:level_emitter',
    'toms_storage:trim',
    'toms_storage:open_crate'
  ]
  blocked.forEach(id => event.remove({ output: id }))
})
