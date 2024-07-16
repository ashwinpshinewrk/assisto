/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bghmp63qdd8d4ql")

  collection.viewRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bghmp63qdd8d4ql")

  collection.viewRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
