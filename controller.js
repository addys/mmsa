var DocumentDBClient = require('documentdb').DocumentClient;
var async = require('async');

function Controller(persistence) {
  this.persistence = persistence;
}

module.exports = Controller;

Controller.prototype = {

    RegisterPaths: function(router) {
        router.route('/model')
            .get(this.GetModel.bind(this));

        router.route('/form/:company')
            .get(this.ListForms.bind(this));

        router.route('/form/:company/:form_id')
            .get(this.GetForm.bind(this));
            
        router.route('/form')
            .post(this.SaveForm.bind(this));
    },
    
    GetModel: function (req, res) {
        var self = this;

        var querySpec = {
            query: 'SELECT TOP 1 * FROM r Root where STARTSWITH(Root.id,"model.")',
            parameters: []
        };

        self.persistence.find(querySpec, function (err, items) {
            if (err) {
                throw (err);
            }

            res.json(items[0].sections);
        });
    },
    
    SaveForm: function(req, res) {
            var self = this;
            
            var formId = req.body.id;
            
            if (formId == null)
            {
                var d = new Date().toISOString()
                    .replace("-","")
                    .replace(":","")
                    .replace("-","")
                    .replace(":","")
                    .replace("Z","")
                    .substring(0,15);
                    
                var newId = req.body.company + "-" + d;
                formId = newId;
            }
            
            self.persistence.getItem(formId, function (err,form) {
                if (err) {
                    throw (err);
                } 
                
                if (form != null)
                {
                    self.persistence.updateItem(req.body.id, req.body, function (err,form) {
                        if (err) {
                            console.log(err);
                            throw (err);
                        }
                        
                        res.status(200).end();
                    });
                }
                else{
                    req.body.id = newId;
                    self.persistence.addItem(req.body, function (err,form) {
                        if (err) {
                            throw (err);
                        }
                        
                        res.status(200).end();
                    });
                }
            });
    },

    ListForms: function(req, res) {
        var self = this;

        var company = req.params.company;

        var querySpec = {
            query: 'SELECT * FROM r Root where Root.company=@company order by Root.timestamp desc',
             parameters: [{
                name: '@company',
                value: company
            }]
        };        

        self.persistence.find(querySpec, function (err, items) {
            if (err) {
                res.json(err);
                throw (err);
            }

            res.json(items);
        });
    },
    
    GetForm: function(req, res) {
        var self = this;

        var id = req.params.form_id;

        var querySpec = {
            query: 'SELECT * FROM r Root where Root.id=@id',
             parameters: [{
                name: '@id',
                value: id
            }]
        };        

        self.persistence.find(querySpec, function (err, items) {
            if (err) {
                res.json(err);
                throw (err);
            }

            if (items.length == 1)
            {
                res.json(items[0]);
            }
            else
            {
                res.json([]);
            }
        });
    }
    
};    
