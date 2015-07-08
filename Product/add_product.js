
var storehippo = require('storehippo-nodejs-sdk')({
    storename : 'atishaydemo2',
    access_key : 'admin'
});
var assert = require('assert');
var utils=require('ms-test-utils');

describe('Adding a product',function(){
    this.timeout(15000000);
    var product= {};

    before(function (done) {
        utils.cleanup(storehippo,'ms.brands',function(){
            done();
        })
    });
    beforeEach(function(done){
        utils.get('/product.json',function(err,data){
            product=data
             done();
        })
       })

    it('1.1-Adding an product without name',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name ='';

        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,406,'Addding an product with missing name did not give proper status');
            assert.equal(result.data,'[{"name":"required","message":"Required field"}]','Addding an product with missing name give wrong message');

            done();


        })

    })

    it('1.2-Adding an product without SKU',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.sku='';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,406,'Adding an product without SKU did not give proper status');
            assert.equal(result.data,'[{"sku":"required","message":"Required field"}]','Adding an product without SKU give wrong message');

            done();


        })

    })

    it('1.3-Adding an product without weight',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.weight = '';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,406,'Adding an product without weight did not give proper status');
            assert.equal(result.data,'[{"weight":"required","message":"Required field"}]','Adding an product without weight give wrong message');

            done();


        })

    })

    it('2-Adding an product with empty categories,brands',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.categories = [];
        product.brand = '';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,200,'Adding an product without categories,brands did not give proper status');


            done();


        })

    })

    it('Add a product with duplicate Alias',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = "test2";
        product.alias = "test2";

        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,200,"product not added");
           request.data.name='test3';
            request.data.alias='test2';
            storehippo.call('add',request,function(err,result){
             assert.equal(result.status,200,'Add a product with duplicate Alias did not give proper status');

            done();

            })
        })

    })

    it('Add a product with existing brand',function(done){
        var brand={};
        brand={
            name :'LGG',
            alias :'LGG'

        }
        var request={
            entity:'ms.brands',
            data:brand

        }

        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,200,"brand not added");

            var request={
                entity:'ms.products',
                data:product

            }

            product.name = 'test4';
            product.brand = 'LGG';

            storehippo.call('add',request,function(err,result){

                assert.equal(result.status,200,'Add a product with existing brand did not give proper status');
               done();


            })


        })
    })

    it('Add a product with new brand',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test5';
        product.brand = 'new';

        storehippo.call('add',request,function(err,result){



            assert.equal(result.status,200,'Add a product with new brand did not give proper status');


            done();


        })

    })

    it('Add a product with price with string value',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test6';
        product.price = 'abc';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,406,'Add a product with price with string value did not give proper status');


            done();


        })

    })

    it('Add a product with price with negative value',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test7';
        product.price = '-22';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,406,'Add a product with price with negative value did not give proper status');

            done();


        })

    })

    it('Add a product with new option set',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test8';
        product.option_set = 'new';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,200,'Add a product with price with string value did not give proper status');

            done();


        })

    })

    it('Add a product without option_set but having variants',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test9';
        product.option_set = '';
        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,200,'Add a product without option_set but having variants did not give proper status');

            done();


        })

    })

    it('Add a product with attributes name is missing but value is present',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test10'
        product.attributes = [{name:'', value:'Lycra Knit', group:'default'}];

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,406,'Add a product with attributes name is missing but value is present did not give proper status');
            assert.equal(result.data,'attributes name is missing','Adding an product without weight give wrong message');


            done();


        })

    })

    it('Add product with categories that does not exists.',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test11';
        product.categories = ['category1'];

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,200,'Add product with categories that does not exists did not give proper status');

            done();


        })

    })

    it('Add a product when compare price is less than price',function(done){
        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test11';
        product.price = '10';
        product.compare_price = '5';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,406,'Add a product when compare price is less than price did not give proper status');
            assert.equal(result.data,'compare price should be greater then price','Add a product when compare price is less than price did not give proper data');
            done();


        })

    })

    it('Adding invalid price',function(done){

        var request={
            entity : 'ms.products',
            data : product
        }

        product.name = 'test12';
        product.price = 'sa';
        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,403,'Adding invalid price did not give proper status');

            done();
        })
    })

    it('Adding an product with duplicate SKU',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test13';
        product.sku = 'test13';

        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,200,"product not added");
            request.data.name='test14';
            request.data.sku='test13'
            storehippo.call('add',request,function(err,result){

                assert.equal(result.status,406,'Adding an product with duplicate SKU did not give proper status');

                done();

            })
        })

    })

    it('Adding an product with negative weight value',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test15';
        product.weight = '-55';

        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,406,'adding an invalid weight of product did not give proper status');
            assert.equal(result.data,'Please enter weight ','adding an invalid weight of product give wrong message');

            done();


        })

    })

    it('Add a product with quantity as a string',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test16';
        product.inventory_quantity ='abc';

        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,403,'Add a product with quantity as a string did not give proper status');
            assert.equal(result.data,'Please enter inventory quantity ','Add a product with quantity as a string give wrong message');

            done();


        })

    })

    it('Adding an empty product',function(done){
        product={};
        var request={
            entity:'ms.products',
            data:product

        }

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,406,'Addding an empty product did not give proper status');
            assert.equal(result.data,'name is required.','Addding an empty product did not give proper message');

            done();


        })

    }) ;

    it('Adding duplicate Record',function(done){

        var request={
            entity : 'ms.products',
            data : product
        }
        product.name = 'test17';
        product.sku = 'test17';
        storehippo.call('add',request,function(err,res){
            assert.equal(res.status,200,"product not added");
            request.data.name = 'test17';
            request.data.sku = 'test17';
            storehippo.call('add',request,function(err,result){
                assert.equal(result.status,409,"Adding duplicate Record didnt give proper status");
                assert.equal(result.data,'duplicate_record',"Adding duplicate Record didnt give proper data message");


            done();
            });
        })
    })

    it('Adding an product with wrong image URL ',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name="test18";
        product.images = [{
            caption:"sda",
            tags:"a",
            image:  {
                data:"http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Imges.jpg",
                uploadType:'url',
                //size:'210412',
                type:"image/jpeg"  ,
                nmae:"a" }
        }]

        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,406,"Adding an product with wrong image URL didnt give proper status");
            assert.equal(result.data,'file does not  exists',"Adding an product with wrong image URL didnt give proper data message");

             done();


        })

    })

    it('Add a product with weight as string',function(done){

        var request={
            entity:'ms.products',
            data:product

        }

        product.name = 'test19';
        product.weight = 'abc';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,403,'Add a product with quantity as a string did not give proper status');
            assert.equal(result.data,'invalid weight ','Add a product with quantity as a string give wrong message');

            done();


        })

    })

    it('Add a product without publish option',function(done){

        var request={
            entity:'ms.products',
            data:product

        }

        product.name = 'test20';
        product.publish = '';

        storehippo.call('add',request,function(err,result){


            assert.equal(result.status,200,'Add a product without publish option did not give proper status');

            done();


        })

    })

    it('Add product with sort order as a string',function(done){

        var request={
            entity:'ms.products',
            data:product

        }
        product.name = 'test21';
        product.sort_order = 'abc';

        storehippo.call('add',request,function(err,result){

            assert.equal(result.status,403,'Add product with sort order as a string did not give proper status');


            done();


        })

    })


    afterEach(function(done){
        done()
    })
    after(function(done){
        done()
    })

})




