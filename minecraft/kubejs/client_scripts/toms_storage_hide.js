RecipeViewerEvents.removeEntries("item", (event) => {
  event.remove("toms_storage:inventory_proxy");
  event.remove("toms_storage:inventory_cable_connector_framed");
  event.remove("toms_storage:inventory_cable_connector");
  event.remove("toms_storage:filing_cabinet");
  event.remove("toms_storage:inventory_interface");
  event.remove("toms_storage:inventory_configurator");
  event.remove("toms_storage:tag_item_filter");
  event.remove("toms_storage:polymorphic_item_filter");
  event.remove("toms_storage:item_filter");
  event.remove("toms_storage:paint_kit");
  event.remove("toms_storage:basic_inventory_hopper");
  event.remove("toms_storage:inventory_cable_framed");
  event.remove("toms_storage:inventory_cable");
  event.remove("toms_storage:level_emitter");
  event.remove("toms_storage:trim");
  event.remove("toms_storage:open_crate");
});

RecipeViewerEvents.removeRecipes(event => {
  event.remove("toms_storage:inventory_proxy");
  event.remove("toms_storage:inventory_cable_connector_framed");
  event.remove("toms_storage:inventory_cable_connector");
  event.remove("toms_storage:filing_cabinet");
  event.remove("toms_storage:inventory_interface");
  event.remove("toms_storage:inventory_configurator");
  event.remove("toms_storage:tag_item_filter");
  event.remove("toms_storage:polymorphic_item_filter");
  event.remove("toms_storage:item_filter");
  event.remove("toms_storage:paint_kit");
  event.remove("toms_storage:basic_inventory_hopper");
  event.remove("toms_storage:inventory_cable_framed");
  event.remove("toms_storage:inventory_cable");
  event.remove("toms_storage:level_emitter");
  event.remove("toms_storage:trim");
  event.remove("toms_storage:open_crate");
})