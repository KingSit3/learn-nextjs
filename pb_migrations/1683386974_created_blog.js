migrate((db) => {
  const collection = new Collection({
    "id": "wu0njae8b5z4856",
    "created": "2023-05-06 15:29:34.499Z",
    "updated": "2023-05-06 15:29:34.499Z",
    "name": "blog",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qraxupwr",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hhqlo0vy",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wu0njae8b5z4856");

  return dao.deleteCollection(collection);
})
