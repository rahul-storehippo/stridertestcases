var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils=require('ms-test-utils');



describe('Getting Brands >', function () {
    this.timeout(1000000);
    var brands = {};
    before(function (done) {
        utils.cleanup(storehippo,'ms.brands',function(){
            done();
        })
    });

    it('Getting the brand without giving recordID', function (done) {
        var request = {
            entity: 'ms.brands'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(err.status, 400, 'Getting the category with missing ID did not give proper status');
            assert.equal(err.data, 'Request must contain the recordId', 'Getting the category with missing ID did not give proper message');
            done();
        });
    });

    it('Getting the brand with empty brand list', function (done) {
        var request = {
            entity: 'ms.brands',
            recordId: '5514f2b80f3e73d035795e1c'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(result.status, 404, 'Getting the brand with empty brand list did not give proper status');
            assert.equal(result.data, '', 'Getting the brand with empty brand list did not give proper message');
            done();
        });
    });

    it('Getting the Brands with recordID', function (done) {
        var brands = {
            name: 'Geting Test',
            alias: 'Geting-test'
        };
        var request = {
            entity: 'ms.brands',
            data: brands
        };
        storehippo.add(request, function (err, res) {
            res.data = JSON.parse(res.data);
            var request = {
                entity: 'ms.brands',
                recordId: res.data._id
            };
            storehippo.get(request, function (err, result) {
                assert.equal(result.status, 200, 'Getting the Brand with recordID did not give proper status');
                done();
            });
        });

    });

    it('Getting the brand with non existing but valid ID', function (done) {
        var request = {
            entity: 'ms.brands',
            recordId: '5514f2b80f3e73d035795e1d'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(result.status, 404, 'Getting the brand with not existing Id did not give proper status');
            assert.equal(result.data, '', 'Getting the brand with not existing ID did not give proper message');
            done();
        });
    });

    it('Getting the Brand with non valid ID', function (done) {

        var request = {
            entity: 'ms.brands',
            recordId: '5513f1ea7d1e11340c2bcec'
        };
        storehippo.get(request, function (err, result) {
            assert.equal(err.status, 400, 'Getting the brand with not valid Id did not give proper status');
            assert.equal(err.data, 'Request recordId is not valid id', 'Getting the Brand with not valid ID did not give proper message');
            done();
        });
    });

});