/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvwseylwd83250g")

  collection.name = "employees"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvwseylwd83250g")

  collection.name = "employee"

  return dao.saveCollection(collection)
})
