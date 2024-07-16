/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bghmp63qdd8d4ql")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "85niuiwi",
    "name": "service",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "full",
        "oil",
        "wash"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bghmp63qdd8d4ql")

  // remove
  collection.schema.removeField("85niuiwi")

  return dao.saveCollection(collection)
})
