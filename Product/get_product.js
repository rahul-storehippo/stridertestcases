var storehippo= require('storehippo-nodejs-sdk')({
    storename : 'atishaydemo2',
    access_key : 'admin'
});
var assert = require('assert');
var utils=require('ms-test-utils');


describe('Getting the products',function(){
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

    it('Getting the product without giving recordID', function (done) {
        var request = {
            entity: 'ms.products'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(err.status, 400, 'Getting the product without giving recordID did not give proper status');
            assert.equal(err.data, 'Request must contain the recordId', 'Getting the product without giving recordID did not give proper message');
            done();
        });
    });

    it('Getting the product when product list is empty',function(done){
        var request = {
            entity : 'ms.products',
            recordId : '550bf2777da6d2b30cefd0a3'

        }
           storehippo.call('get',request,function(err,result){
            assert.equal(result.status,404,"getting the product didn't give proper status");
            assert.equal(result.data,'',"Productsss list is not empty");

            done();
        })

    })

    it('Getting the product with recordID',function(done){
        utils.get('product.json',function(err,data){
            product=data;
            var request = {
            entity : 'ms.products',
            data : product
        }
         storehippo.add(request,function(err,res){
             assert.equal(res.status,200,"product not added")
             res.data = JSON.parse(res.data);
             var request = {
                 entity : 'ms.products',
                 recordId : res.data._id

             }
             storehippo.call('get',request,function(err,result){

                 done();
             })
         })


        })

    })

    it('Getting a product with non existing but valid ID',function(done){
        var request= {
            entity : 'ms.products',
            recordId : '550bfaebc738b94e0f46c1cb'
        }

        storehippo.call('get',request,function(err,result){
            assert.equal(result.status,404,"Getting the product with not existing Id did not give proper status");
            assert.equal(result.data,'',"Getting the product with not existing ID did not give proper message");

            done();
        })


    })

    it('Getting the product with non valid ID', function (done) {

        var request = {
            entity: 'ms.products',
            recordId: '5513f1ea7d1e11340c2bcec'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(err.status, 400, 'Getting the product with not valid Id did not give proper status');
            assert.equal(err.data, 'Request recordId is not valid id', 'Getting the product with not valid ID did not give proper message');
            done();
        });
    });



    after(function(done){
        done();

    })

    afterEach(function(done){
        done();
    })





})





