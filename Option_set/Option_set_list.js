var storehippo = require('storehippo-nodejs-sdk')({
    storename : 'atishaydemo2',
    access_key : 'admin'
});
var assert=require('assert');


describe('Options_set Test Cases',function(){
    this.timeout(15000000);
    var optionss={};
    before(function(done){

        done();
    })
    beforeEach(function(done){
        // to be run before each test case
        done();

    })




    it('listing the options Set',function(done){

        var request={
            entity:'ms.option_set'
        };
        storehippo.list(request,function(err,result){     assert.equal(result.status,200,'listing the options set did not give proper status');
            //assert.equal(result.data,'Request recordId is not valid id','Addding an duplicate category did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('listing the options set with empty list',function(done){

        var request={
            entity:'ms.option_set'


        }

        storehippo.list(request,function(err,result){


            assert.equal(result.status,200,'Listing the options set  with empty list  did not give proper status');
            //assert.equal(result.data,'Request recordId is not valid id','Addding an duplicate category did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
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