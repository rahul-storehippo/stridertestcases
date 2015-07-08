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
var utils=require('ms-test-utils');

describe('Adding Brands >', function () {
    this.timeout(1000000);
    var brands = {};

    before(function (done) {
        utils.cleanup(storehippo,'ms.brands',function(){
            done();
        })
    });

    it('Adding an empty Brand', function (done) {
        var request = {
            entity: 'ms.brands',
            data: {}
        };
        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status, 406, 'Adding an empty Brand does not give prorper error');
            assert.equal(result.data, 'name is required.', 'Adding an empty Brand does not give prorper error');
            done();
        });
    });

    it('Adding a Brand', function (done) {
        var brands = {
            name: 'Test',
            alias: 'test'
        };
        var request = {
            entity: 'ms.brands',
            data: brands
        };
        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status, 200, 'Addding an Brand did not give proper status');
            done();
        });
    });

    it('Adding a duplicate Brand with same name', function (done) {
        brands = {
            name: 'Brand',
            alias: 'brand'
        };
        var request = {
            entity: 'ms.brands',
            data: brands

        };
        storehippo.call('add', request, function (err, res) {
            assert.equal(res.status, 200, 'Brand not added');
            request.data.alias = "brand-1";
            storehippo.call('add', request, function (err, result) {
                assert.equal(result.status, 409, 'Addding an duplicate Brand did not give proper status');
                assert.equal(result.data, 'duplicate_record', "Adding an duplicate brand does not give proper status");
                done();
            });
        });
    });

    it('Adding a Brand with existing alias', function (done) {
        brands = {
            name: 'Testing',
            alias: 'testing'
        };
        var request = {
            entity: 'ms.brands',
            data: brands

        };
        storehippo.call('add', request, function (err, res) {
            assert.equal(res.status, 200, 'Brand not added');
            request.data.name = "Testing_demo";
            storehippo.call('add', request, function (err, result) {
                assert.equal(result.status, 200, 'Adding a Brand with existing alias is not handled');
                done();
            });
        });
    });

    it('Adding a Brand with invalid name like dot with no alias', function (done) {
        brands = {
            name: '.',
            alias: ''

        };
        var request = {
            entity: 'ms.brands',
            data: brands

        };
        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status, 200, 'Addding an Brand did not give proper status');
            done();
        });
    });

    it('Adding a Brand with missing image path', function (done) {
        var brands = {
            name: 'aa012',
            alias: 'rhll1',
            image: {
                data: "",
                uploadType: 'url',
                //size:'210412',
                type: "image/jpeg"
            }
        };
        var request = {
            entity: 'ms.brands',
            data: brands

        };
        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status, 406, 'Adding a Brand with missing image path does not give proper status');
            assert.equal(result.data, 'file does not  exists', 'Adding a Brand with missing image path does not give proper data');
            done();
        });
    });

});