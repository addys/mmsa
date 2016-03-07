var DocumentDBClient = require('documentdb').DocumentClient;
var docdbUtils = require('./docdbUtils');

function Persistence(config) {

   var docDbClient = new DocumentDBClient(config.host, {
       masterKey: config.authKey
   });
    
  this.client = docDbClient;
  this.databaseId = config.databaseId;
  this.collectionId = config.collectionId;

  this.database = null;
  this.collection = null;
}


module.exports = Persistence;

Persistence.prototype = {
    init: function (callback) {
        var self = this;

        docdbUtils.getOrCreateDatabase(self.client, self.databaseId, function (err, db) {
            if (err) {
                callback(err);

            } else {
                self.database = db;
                docdbUtils.getOrCreateCollection(self.client, self.database._self, self.collectionId, function (err, coll) {
                    if (err) {
                        callback(err);

                    } else {
                        self.collection = coll;
                    }
                });
            }
        });
    },

    find: function (querySpec, callback) {
        var self = this;

        self.client.queryDocuments(self.collection._self, querySpec).toArray(function (err, results) {
            if (err) {
                callback(err);

            } else {
                callback(null, results);
            }
        });
    },

    addItem: function (item, callback) {
        var self = this;

        item.date = Date.now();

        self.client.createDocument(self.collection._self, item, function (err, doc) {
            if (err) {
                callback(err);

            } else {
                callback(null, doc);
            }
        });
    },

    updateItem: function (itemId, item, callback) {
        var self = this;

        self.getItem(itemId, function (err, doc) {
            if (err) {
                callback(err);

            } else {
                
                self.client.replaceDocument(doc._self, item, function (err, replaced) {
                    if (err) {
                        callback(err);

                    } else {
                        callback(null, replaced);
                    }
                });
            }
        });
    },

    getItem: function (itemId, callback) {
        var self = this;

        var querySpec = {
            query: 'SELECT * FROM root r WHERE r.id=@id',
            parameters: [{
                name: '@id',
                value: itemId
            }]
        };

        self.client.queryDocuments(self.collection._self, querySpec).toArray(function (err, results) {
            if (err) {
                callback(err);

            } else {
                callback(null, results[0]);
            }
        });
    },

  getModel: function (req,res) {
      var self = this;
      
      var querySpec = {
            query: 'SELECT TOP 1 * FROM r Root where STARTSWITH(Root.id,"model.")',
            parameters: []
        };

        self.taskDao.find(querySpec, function (err, items) {
            if (err) {
                throw (err);
            }

            res.render('questions', {
                title: items.length,
                model: items[0],
            });            
            
        });
  },
    
    sampleItem: function()
    {
      var sample =  
        {
            "id": "Company1-201603010000-1",
            "company" : "Company1",
            "timestamp" : "2016-03-01T00:00:00",
            "version": "model.v1",
            "answers":
            [
                {
                    "id": "1.1",
                    "answer":"1"
                },
                {
                    "id": "1.2",
                    "answer":"2"
                },
                {
                    "id": "1.3",
                    "answer":"1"
                },
                {
                    "id": "1.4",
                    "answer":"4"
                },
                {
                    "id": "2.1",
                    "answer":"4"
                },    
            ]
        };
        
        return sample;
    }
};
