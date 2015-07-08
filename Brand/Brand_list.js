/**
 * Created with JetBrains WebStorm.
 * User: atishay
 * Date: 1/7/15
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */
var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');


describe('Listing Brands >', function () {
    this.timeout(1000000);
    var brands = {};
    before(function (done) {
        var array = [
            {
                name: 'test1',
                alias: 'test1'
            },
            {
                name: 'test',
                alias: 'test2'
            },
            {
                name: 'test3',
                alias: 'test3'
            }
        ];
        utils.cleanup(storehippo, 'ms.brands', function () {
            utils.addItems(storehippo, 'ms.brands', array, function () {
                done();
            })
        })
    })

    it('listing the brands', function (done) {
        var request = {
            entity: 'ms.brands'
        }
        storehippo.list(request, function (err, result) {
            result.data = JSON.parse(result.data);
            assert.equal(result.status, 200, 'listing the Brands did not give proper status');
            assert.equal(result.data.total, 3, 'Listing the brands give incorrect number of records');
            done();
        })
    })

    it('listing the brands with name filter', function (done) {
        var request = {
            entity: 'ms.brands',
            query: {
                filters: [
                    {field: "name", value: "test1", operator: "equal"}
                ],
                start: 0,
                limit: 50
            }
        }
        storehippo.list(request, function (err, result) {
            result.data = JSON.parse(result.data);
            assert.equal(result.status, 200, 'listing the brands with name filter did not give proper status');
            assert.equal(result.data.total, 1, 'listing the brands with name filter give incorrect number of items');
            done();
        })
    })

    it('listing the brands with empty list', function (done) {
        //This test case should be the last test case as all the records are being deleted.
        var request = {
            entity: 'ms.brands'
        }
        utils.cleanup(storehippo, 'ms.brands', function () {
            storehippo.list(request, function (err, result) {
                result.data = JSON.parse(result.data);
                assert.equal(result.status, 200, 'Listing the brands  with empty list  did not give proper status');
                assert.equal(result.data.total, 0, 'Listing the brands  with empty list  give incorrect number of items');
                done();
            })
        })

    })

})