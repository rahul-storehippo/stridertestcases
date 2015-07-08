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
    it.skip('deleting an option set ',function(done){

        var request={
            entity:'ms.option_set' ,
            recordId :'551937a6a54b8c9037a70ddb'


        }

        storehippo.del(request,function(err,result){


            assert.equal(result.status,200,'deleting an option set did not give proper status');
            assert.equal(result.data,'updated successfully','deleting an option set did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('deleting an option set with already deleted ID',function(done){

        var request={
            entity:'ms.option_set' ,
            recordId :'551937a6a54b8c9037a70dda'


        }

        storehippo.del(request,function(err,result){


            assert.equal(result.status,200,'deleting an option set with already deleted ID did not give proper status');
            assert.equal(result.data,'Id not found','deleting an option set with already deleted ID did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('deleting an option set with non valid Id ',function(done){

        var request={
            entity:'ms.option_set' ,
            recordId :'5513f1ea7d1e11340c2bcec'


        }

        storehippo.del(request,function(err,result){


            assert.equal(err.status,400,'deleting an option set with non valid Id did not give proper status');
            assert.equal(err.data,'Request recordId is not valid id','deleting an option set with non valid Id did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('deleting an option set with different suboption ID ',function(done){

        var request={
            entity:'ms.option_set' ,
            recordId :'5519373df6469177371143e8'


        }

        storehippo.del(request,function(err,result){


            assert.equal(result.status,200,'deleting an option set did not give proper status');
            assert.equal(result.data,'updated successfully','deleting an option set did not give proper message');
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