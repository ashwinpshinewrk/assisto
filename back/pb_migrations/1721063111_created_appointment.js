/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bghmp63qdd8d4ql",
    "created": "2024-07-15 17:05:11.196Z",
    "updated": "2024-07-15 17:05:11.196Z",
    "name": "appointment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3wbpzxdb",
        "name": "field",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "fvdaaok2",
        "name": "carType",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "coupe",
            "sedan",
            "SUV"
          ]
        }
      },
      {
        "system": false,
        "id": "0xrwxivh",
        "name": "date",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "n0pznayn",
        "name": "time",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "10",
            "1",
            "3"
          ]
        }
      },
      {
        "system": false,
        "id": "65xljypz",
        "name": "completed",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bghmp63qdd8d4ql");

  return dao.deleteCollection(collection);
})
