var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');


describe('Getting a category >', function () {
    this.timeout(1000000);
    var category = {};
    before(function (done) {
        utils.cleanup(storehippo, 'ms.categories', function () {
            done();
        })
    })

    it('Getting the category without giving recordID', function (done) {

        var request = {
            entity: 'ms.categories'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(err.status, 400, 'Getting the category with missing ID did not give proper status');
            assert.equal(err.data, 'Request must contain the recordId', 'Getting the category with missing ID did not give proper message');
            done();
        })
    })

    it('Getting the category with recordID', function (done) {
        var category = {
            name: 'Testing',
            alias: 'testing'

        }
        var request = {
            entity: 'ms.categories',
            data: category
        }
        storehippo.add(request, function (err, result) {
            assert.equal(result.status, 200, 'Error adding in "Getting the category with recordID" test case');
            result.data = JSON.parse(result.data);
            var request = {
                entity: 'ms.categories',
                recordId: result.data._id
            }

            storehippo.get(request, function (err, result) {
                result.data=JSON.parse(result.data);
                assert.equal(result.status, 200, 'Getting the category with recordID did not give proper status');
                assert.equal(result.data.name,'Testing','Getting the category with recordID did not give proper category name');
                assert.equal(result.data.alias,'testing','Getting the category with recordID did not give proper category alias');
                done();
            });
        });
    });

    it('Getting the category with non existing but valid ID', function (done) {

        var request = {
            entity: 'ms.categories',
            recordId: '5513f1ea7d1e11340c2bcec3'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(result.status, 404, 'Getting the category with not valid Id did not give proper status');
            done();
        });
    });

    it('Getting the category with non valid ID', function (done) {
        var request = {
            entity: 'ms.categories',
            recordId: '5513f1ea7d1e11340c2bcec'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(err.status, 400, 'Getting the category with not valid Id did not give proper status');
            assert.equal(err.data, 'Request recordId is not valid id', 'Getting the category with not valid ID did not give proper message');
            done();
        });
    });


});