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


describe('Deleting Brand >', function () {
    this.timeout(1000000);
    var brands = {};
    before(function (done) {
        utils.cleanup(storehippo,'ms.brands',function(){
               done();
        })
    });
    beforeEach(function (done) {
        // to be run before each test case
        done();

    });

    it('Deleting a brand', function (done) {
        var brands = {
            name: 'Del Test',
            alias: 'Del-test'
        };
        var request = {
            entity: 'ms.brands',
            data: brands
        };
        storehippo.add(request, function (err, res) {
            res.data=JSON.parse(res.data);
            var request = {
                entity: 'ms.brands',
                recordId: res.data._id
            };
            storehippo.del(request, function (err, result) {
                assert.equal(result.status, 200, 'deleting an brand did not give proper status');
                assert.equal(result.data, 'updated successfully', 'deleting an brand did not give proper message');
                done();
            });
        });

    });

    it('deleting a brand with non existing brand ID', function (done) {
        var request = {
            entity: 'ms.brands',
            recordId: '5514f8d37c5b4ff73cbae52c'
        }
        storehippo.del(request, function (err, result) {
            assert.equal(result.status, 406, 'deleting an brand with non existing brand ID did not give proper status');
            done();
        });
    });

    it('deleting a brand with invalid ID', function (done) {
        var request = {
            entity: 'ms.brands',
            recordId: '5514f8d37c5b4ff73cbae52'
        }
        storehippo.del(request, function (err, result) {
            assert.equal(err.status, 400, 'deleting an brand with invalid brand ID did not give proper status');
            assert.equal(err.data, 'Request recordId is not valid id', 'deleting an brand with invalid brand ID did not give proper message');
             done();
        })
    })

    it('deleting a brand without giving any ID', function (done) {
        var request = {
            entity: 'ms.brands'
        }
        storehippo.del(request, function (err, result) {
            assert.equal(err.status, 400, 'deleting an brand  did not give proper status');
            assert.equal(err.data, 'Request must contain the recordId', 'deleting an brand  did not give proper message');
            done();
        })
    })
    afterEach(function (done) {
        done()
    })
    after(function (done) {
        done()
    })

})