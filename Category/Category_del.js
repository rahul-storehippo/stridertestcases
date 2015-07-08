var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');

describe('Deleting a category >', function () {
    this.timeout(1000000);
    var category = {};
    before(function (done) {
        utils.cleanup(storehippo, 'ms.categories', function () {
            done();
        });
    });

    it('Deleting a category ', function (done) {
        var category = {
            name: 'Testing',
            alias: 'testing'
        };
        var request = {
            entity: 'ms.categories',
            data: category
        };
        storehippo.add(request, function (err, result) {
            assert.equal(result.status,200,'Category did not added successfully in "Deleing a category test case"') ;
            result.data=JSON.parse(result.data);
            var request = {
                entity: 'ms.categories',
                recordId: result.data._id
            };
            storehippo.del(request, function (err, result) {
                assert.equal(result.status,200,'Deleting a category does not give proper status');
                assert.equal(result.data,'OK','Deleting a category does not give proper data');
                done();
            });
        });

    });

    it('Deleting a category with non existing id', function (done) {
        var request = {
            entity: 'ms.categories',
            recordId: '550ff81f7c0dbcec09cb6234'
        };
        storehippo.del(request, function (err, result) {
            assert.equal(result.status,404,'Deleting a category with non existing id did not give proper status');
            assert.equal(result.data,'Not Found','Deleting a category with non existing id did not give proper data');
            done();
        });
    });

    it('Deleting a category with non valid id', function (done) {
        var request = {
            entity: 'ms.categories',
            recordId: '550ff81f7c0dbcec09cb623'
        };
        storehippo.del(request, function (err, result) {
            assert.equal(err.status,400,'Deleting a category with non valid id did not give proper status');
            assert.equal(err.data,'Request recordId is not valid id','Deleting a category with non valid id did not give proper data');
            done();
        });
    });

});