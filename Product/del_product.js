var storehippo= require('storehippo-nodejs-sdk')({
    storename : 'atishaydemo2',
    access_key : 'admin'
});
var assert = require('assert');
var utils=require('ms-test-utils');

  describe('Deleting the products ',function(){
    this.timeout(150000);
    var product={};
      before(function (done) {
          utils.cleanup(storehippo,'ms.products',function(){
              done();
          })
      });
    beforeEach(function(done){
        done();
    })


    it('Delete the product with given ID',function(done){
        utils.get('product.json',function(err,data){
            product=data;

             var request = {
                 entity : 'ms.products',
                 data : product
             }

            storehippo.add (request,function(err,result){
                assert(result.status,200,"product not added");
                result.data = JSON.parse(result.data);
                id = result.data._id;


               var request1 = {
               entity : 'ms.products',
               recordId : id
               }

        storehippo.del(request1,function(err,result){
            assert.equal(result.status,200,"Deleting the product didn't give proper status");
            assert.equal(result.data,"updated successfully","Deleting the product didn't give proper message");

            done();
        })
            })
        })
    })

    it('Deleting the non existing product with given ID ',function(done){


        var request = {
            entity : 'ms.products',
            recordId :'550bc4b36ffc94855431ac2d'
        }

        storehippo.del(request,function(err,result){

            assert.equal(result.status,406,"Deleting the product didn't give proper status");

            done();
        })

    })

    it('Deleting the product with not valid ID ',function(done){


        var request = {
            entity : 'ms.products',
            recordId :'550bc4b36ffc9485541ac2d'
        }

        storehippo.del(request,function(err,result){
             assert.equal(err.status,400,"Deleting the product didn't give proper status");
            assert.equal(err.data,"Request recordId is not valid id","Deleting the product didn't give proper message");
            done();
        })

    })

    it('deleting a product without giving any ID', function (done) {
          var request = {
              entity: 'ms.brands'
          }
          storehippo.del(request, function (err, result) {
              assert.equal(err.status, 400, 'deleting an brand  did not give proper status');
              assert.equal(err.data, 'Request must contain the recordId', 'deleting an brand  did not give proper message');
              done();
          })
      })


    after(function(done){
        done();

    })

    afterEach(function(done){
        done();
    })


})

