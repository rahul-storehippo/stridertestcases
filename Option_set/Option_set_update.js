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





    it.skip('Updating a options set name and options name',function(done){
        optionss ={
            name :'swatch1',
            options:
                [{
                    alias : 'clrr',
                    display_name :'clrr',
                    name:'clrr',
                    required:'1',
                    type:'swatch',
                    values :[{
                        label:'redd',
                        value:'redd',
                        color:'redd'},

                        {
                            label:'blue',
                            value:'blue',
                            color:'blue'
                        }]
                },



                    {
                        alias : 'szz',
                        display_name :'szz',
                        name:'szz',
                        required:'1',
                        type:'radio',
                        values :[{
                            label:'S1',
                            value:'S1'
                        },

                            {
                                label:'M',
                                value:'M'

                            }]

                    }
                ]
        }

        var request={
            entity:'ms.option_set',
            data: optionss,
            recordId :'551936efa54b8c9037a70dab'


        }

        storehippo.update(request,function(err,result){


            assert.equal(result.status,200,'updating an options set name and options name did not give proper status');
            assert.equal(result.data,'updated successfully','updating an options set name and options name did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Updating a options set with invalid ID',function(done){
        optionss ={
            name :'swatch1',
            options:
                [{
                    alias : 'clrr',
                    display_name :'clrr',
                    name:'clrr',
                    required:'1',
                    type:'swatch',
                    values :[{
                        label:'redd',
                        value:'redd',
                        color:'redd'},

                        {
                            label:'blue',
                            value:'blue',
                            color:'blue'
                        }]
                },



                    {
                        alias : 'szz',
                        display_name :'szz',
                        name:'szz',
                        required:'1',
                        type:'radio',
                        values :[{
                            label:'S1',
                            value:'S1'
                        },

                            {
                                label:'M',
                                value:'M'

                            }]

                    }
                ]
        }

        var request={
            entity:'ms.option_set',
            data: optionss,
            recordId :'551936efa54b8c9037a70da'


        }

        storehippo.update(request,function(err,result){


            assert.equal(err.status,400,'Updating an options set with invalid ID did not give proper status');
            assert.equal(err.data,'Request recordId is not valid id','updating an options set with invalid ID did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Updating a options set with duplicate name and values',function(done){
        optionss ={
            name :'demonew1',
            options:
                [{
                    alias : 'clrr',
                    display_name :'clrr',
                    name:'clrr',
                    required:'1',
                    type:'swatch',
                    values :[{
                        label:'redd',
                        value:'redd',
                        color:'redd'},

                        {
                            label:'blue',
                            value:'blue',
                            color:'blue'
                        }]
                },



                    {
                        alias : 'szz',
                        display_name :'szz',
                        name:'szz',
                        required:'1',
                        type:'radio',
                        values :[{
                            label:'S1',
                            value:'S1'
                        },

                            {
                                label:'M',
                                value:'M'

                            }]

                    }
                ]
        }

        var request={
            entity:'ms.option_set',
            data: optionss,
            recordId :'551936efa54b8c9037a70dab'


        }

        storehippo.update(request,function(err,result){


            assert.equal(result.status,200,'Updating a options set with duplicate name and values did not give proper status');
            assert.equal(result.data,'duplicate record','Updating a options set with duplicate name and values did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Updating a options set with non existing but valid ID',function(done){
        optionss ={
            name :'demonew1',
            options:
                [{
                    alias : 'clrr',
                    display_name :'clrr',
                    name:'clrr',
                    required:'1',
                    type:'swatch',
                    values :[{
                        label:'redd',
                        value:'redd',
                        color:'redd'},

                        {
                            label:'blue',
                            value:'blue',
                            color:'blue'
                        }]
                },



                    {
                        alias : 'szz',
                        display_name :'szz',
                        name:'szz',
                        required:'1',
                        type:'radio',
                        values :[{
                            label:'S1',
                            value:'S1'
                        },

                            {
                                label:'M',
                                value:'M'

                            }]

                    }
                ]
        }

        var request={
            entity:'ms.option_set',
            data: optionss,
            recordId :'551936efa54b8c9037a70dad'


        }

        storehippo.update(request,function(err,result){


            assert.equal(result.status,404,'Updating a options set with non existing but valid ID did not give proper status');
            assert.equal(result.data,'ID not found','Updating a options set with non existing but valid ID did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Updating a options set without giving ID',function(done){
        optionss ={
            name :'swatch1',
            options:
                [{
                    alias : 'clrr',
                    display_name :'clrr',
                    name:'clrr',
                    required:'1',
                    type:'swatch',
                    values :[{
                        label:'redd',
                        value:'redd',
                        color:'redd'},

                        {
                            label:'blue',
                            value:'blue',
                            color:'blue'
                        }]
                },



                    {
                        alias : 'szz',
                        display_name :'szz',
                        name:'szz',
                        required:'1',
                        type:'radio',
                        values :[{
                            label:'S1',
                            value:'S1'
                        },

                            {
                                label:'M',
                                value:'M'

                            }]

                    }
                ]
        }

        var request={
            entity:'ms.option_set',
            data: optionss
            //recordId :'551936efa54b8c9037a70da'


        }

        storehippo.update(request,function(err,result){


            assert.equal(err.status,400,'Updating an options set without  ID did not give proper status');
            assert.equal(err.data,'Request must contain the recordId','updating an options set without ID did not give proper message');
            console.log('eeeeerrrrroooorrrr is here',err);
            console.log('rrrrrrressssult is here',result);
            done();
        })
    })

    it.skip('Updating a options_set type from swatch to radio/image',function(done){
        optionss ={
            name :'swatch1',
            options:
                [{
                    alias : 'clrr',
                    display_name :'clrr',
                    name:'clrr',
                    required:'1',
                    type:'dropdown',
                    values :[{
                        label:'redd',
                        value:'redd',
                        color:'redd'},

                        {
                            label:'blue',
                            value:'blue',
                            color:'blue'
                        }]
                },



                    {
                        alias : 'szz',
                        display_name :'szz',
                        name:'szz',
                        required:'1',
                        type:'swatch',
                        values :[{
                            label:'S1',
                            value:'S1'
                        },

                            {
                                label:'M',
                                value:'M'

                            }]

                    }
                ]
        }

        var request={
            entity:'ms.option_set',
            data: optionss,
            recordId :'551936efa54b8c9037a70dab'


        }

        storehippo.update(request,function(err,result){


            assert.equal(result.status,200,'Updating a options_set type from swatch to radio/image did not give proper status');
            assert.equal(result.data,'updated successfully','Updating a options_set type from swatch to radio/image did not give proper message');
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