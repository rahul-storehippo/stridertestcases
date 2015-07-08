var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');

describe('Listing a category >', function () {
    this.timeout(1000000);
    var category = {};
    before(function (done) {
        var array=[
            {
                name:'Test1',
                publish:'1'
            },
            {
                name:'Test2',
                publish:'1'
            },
            {
                name:'Test3',
                publish:'1'
            },
            {
                name:'Test4',
                publish:'1'
            },
            {
                name:'Test5',
                publish:'1'
            }
        ]
        utils.cleanup(storehippo, 'ms.categories', function () {
            utils.addItems(storehippo, 'ms.categories',array, function () {
                done();
            });
        });

    });

    it('listing the categories', function (done) {

        var request = {
            entity: 'ms.categories'
        }
        storehippo.list(request, function (err, result) {
            result.data = JSON.parse(result.data);
            assert.equal(result.status, 200, 'listing the categories did not give proper status');
            assert.equal(result.data.total,5,'Listing the category give incorrect number of categories');
            done();
        });
    });

    it('listing the categories with empty list', function (done) {
        //This test case should be the last test case as all the records are being deleted.
        utils.cleanup(storehippo, 'ms.categories', function () {
            var request = {
                entity: 'ms.categories'
            }

            storehippo.list(request, function (err, result) {
                result.data = JSON.parse(result.data);
                assert.equal(result.status, 200, 'Listing the category  with empty list  did not give proper status');
                assert.equal(result.data.total, 0, 'Listing the category  with empty list  give incorrect number of categories');
                done();
            });
        });

    });


});