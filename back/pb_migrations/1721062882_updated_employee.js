/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvwseylwd83250g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fxutc803",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvwseylwd83250g")

  // remove
  collection.schema.removeField("fxutc803")

  return dao.saveCollection(collection)
})
