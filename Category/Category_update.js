var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');


describe('Updating a category >', function () {
    this.timeout(1000000);
    var category = {};
    var id;
    before(function (done) {
        utils.cleanup(storehippo, 'ms.categories', function () {
            done();
        })
    })
    beforeEach(function (done) {
        var category = {
            name: 'Testing',
            alias: 'testing'
        }
        var request = {
            entity: 'ms.categories',
            data: category
        }
        storehippo.add(request, function (err, result) {
            if (err) throw err;
            result.data=JSON.parse(result.data);
            id=result.data._id;
            done();
        })
    })

    it('Updating an sub category with parent category', function (done) {
        var category = {
            name:'Parent',
            alias:'parent'
        };
        var request = {
            entity: 'ms.categories',
            data: category
        };
        storehippo.add(request, function (err, result) {
            result.data=JSON.parse(result.data);
            var category={
                name:'Testing',
                alias:'testing',
                parent:result.data._id
            };
            var request={
                entity:'ms.categories',
                data:category,
                recordId:id
            };
            storehippo.update(request,function(err,result){
                assert.equal(result.status,200,'Updating an sub category with parent category did not give proper status');
                assert.equal(result.data,'updated successfully','Updating an sub category with parent category did not give proper data');
                done();
            });
        });
    });
});