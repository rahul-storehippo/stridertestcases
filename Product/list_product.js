var storehippo= require('storehippo-nodejs-sdk')({
    storename : 'atishaydemo2',
    access_key : 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');

 describe('listing the products',function(){
     this.timeout(150000);
     var product={};

     before(function(done){
         var array = [
             {
                 name: 'test1',
                 alias: 'test1',
                 "images": [],
                 "categories": [],
                 "brand": "brand1",
                 "publish": "1",
                 "price": 100,
                 "compare_price": 101,
                 "sku": "100",
                 "weight": "100"
             }

         ];
         utils.cleanup(storehippo, 'ms.products', function () {
             utils.addItems(storehippo, 'ms.products', array, function () {
                 done();
             })
         })
     })

      beforeEach(function(done){
          done();
      })


       it('Listing the product',function(done){
           var request = {
               entity : 'ms.products'

           }

             storehippo.call('list',request,function(err,result){
               result.data = JSON.parse(result.data);
               assert.equal(result.status,200,"listing the product didn't give proper status");
               assert.equal(result.data.total, 1, 'Listing the products give incorrect number of records');

               done();
           })

       })

       it('listing the products with name filter', function (done) {
         var request = {
             entity: 'ms.products',
             query: {
                 filters: [
                     {field: "name", value: "test1", operator: "equal"}
                 ],
                 start: 0,
                 limit: 50
             }
         }
         storehippo.list(request, function (err, result) {
             result.data = JSON.parse(result.data);
             assert.equal(result.status, 200, 'listing the products with name filter did not give proper status');
             assert.equal(result.data.total, 1, 'listing the products with name filter give incorrect number of items');
             done();
         })
     })

       it('Listing the product when product list is empty',function(done){
         var request = {
             entity : 'ms.products'

         }

         utils.cleanup(storehippo, 'ms.products', function () {
         storehippo.call('list',request,function(err,result){
             result.data = JSON.parse(result.data);
             assert.equal(result.status,200,"listing the product didn't give proper status");
             assert.equal(result.data.total,0,"Products list is not empty");

             done();
         })
         })
     })




   after(function(done){
         done();

     })

     afterEach(function(done){
         done();
     })


 })









