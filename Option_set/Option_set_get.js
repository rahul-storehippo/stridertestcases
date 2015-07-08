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

    it.skip('Getting the options without giving recordID',function(done){

        var request={
            entity:'ms.option_set'


        }

        storehippo.get(request,function(err,result){


            assert.equal(err.status,400,'Getting the optionset with missing ID did not give proper status');
            assert.equal(err.data,'Request must contain the recordId','Getting the optionset with missing ID did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Getting the options with empty option list',function(done){

        var request={
            entity:'ms.option_set' ,
            recordId :'5513f1ea7d1e11340c2bcec2'


        }

        storehippo.get(request,function(err,result){


            assert.equal(err.status,400,'Getting the option set with empty option list did not give proper status');
            //assert.equal(err.data,'Request must contain the recordId','Getting the optionset with empty option list did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Getting the options with record_ID',function(done){

        var request={
            entity:'ms.option_set' ,
            recordId :'551937a6a54b8c9037a70ddb'


        }

        storehippo.get(request,function(err,result){


            //assert.equal(result.status,200,'Getting the option set did not give proper status');
            //assert.equal(err.data,'Request must contain the recordId','Getting the optionset with empty option list did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Getting the options with non existing but valid record_ID',function(done){

        var request={
            entity:'ms.option_set' ,
            recordId :'5513f1ea7d1e11340c2bcec2'


        }

        storehippo.get(request,function(err,result){


            assert.equal(result.status,404,'Getting the option set with non existing but valid record_ID did not give proper status');
            assert.equal(result.data,'','Getting the optionset with non existing but valid record_ID did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Getting the options with non valid record_ID',function(done){

        var request={
            entity:'ms.option_set' ,
            recordId :'5513f1ea7d1e11340c2bcec'


        }

        storehippo.get(request,function(err,result){


            assert.equal(err.status,400,'Getting the option set with non valid record_ID did not give proper status');
            assert.equal(err.data,'Request recordId is not valid id','Getting the optionset with non valid record_ID did not give proper message');
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