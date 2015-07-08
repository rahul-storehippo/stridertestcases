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

describe('Updating Brands >', function () {
    this.timeout(1000000);
    var id;
    var brands = {};
    before(function (done) {
        utils.cleanup(storehippo, 'ms.brands', function () {
            done();
        })
    })

    beforeEach(function (done) {
        var request = {
            entity: 'ms.brands',
            data: {
                name: 'Update Test',
                alias: 'update-test',
                description: 'Testing purpose'
            }
        }
        storehippo.add(request, function (err, result) {
            if (err) throw err
            result.data = JSON.parse(result.data);
            id = result.data._id;
            done();
        })


    })

    it('updating a brand name', function (done) {
        var brands = {
            name: 'New Update Test'
        }
        var request = {
            entity: 'ms.brands',
            data: brands,
            recordId: id


        }

        storehippo.update(request, function (err, result) {
            assert.equal(result.status, 200, 'updating a brand name did not give proper status');
            assert.equal(result.data, 'updated successfully', 'updating a brand name did not give proper message');
            storehippo.get({entity: 'ms.brands', recordId: id}, function (err, res) {
                res.data = JSON.parse(res.data);
                assert.equal(res.data.name, 'New Update Test','updating a brand name did not updated name');
                done();
            })
        })
    })

    it('updating a brand name with existing brand name', function (done) {
        var request = {
            entity: 'ms.brands',
            data: {
                name: 'Existing Test',
                alias: 'existing-test',
                description: 'Testing purpose'
            }
        }
        storehippo.add(request, function (err, result) {
            var brands = {
                name: 'Existing Test',
                alias: 'update-test'
            }
            var request = {
                entity: 'ms.brands',
                data: brands,
                recordId: id
            }
            storehippo.update(request, function (err, result) {
                assert.equal(result.status, 409, 'updating a brand name did not give proper status');
                assert.equal(result.data, 'duplicate_record', 'updating a brand name did not give proper message');
                done();
            })
        })

    })

    it('updating a brand name with nonexisting id', function (done) {
        var brands = {
            name: 'Testing Update',
            alias: 'testing-update'

        }
        var request = {
            entity: 'ms.brands',
            data: brands,
            recordId: '5514f8d77c5b4ff73cbae52c'
        }
        storehippo.update(request, function (err, result) {
            assert.equal(result.status, 406, 'updating a brand name did not give proper status');
            done();
        })
    })

    it('updating a brand name with not valid id', function (done) {
        var brands = {
            name: 'rhltrooooo',
            alias: 'rhl'
        }
        var request = {
            entity: 'ms.brands',
            data: brands,
            recordId: '5514f8d77c5b4ff73cbae5'
        }
        storehippo.update(request, function (err, result) {
            assert.equal(err.status, 400, 'updating a brand name did not give proper status');
            assert.equal(err.data, 'Request recordId is not valid id', 'updating a brand name did not give proper message');
            done();
        })
    })

    it('updating a brand name without giving any ID', function (done) {
        var brands = {
            name: 'rhltrooooo',
            alias: 'rhl'
        }
        var request = {
            entity: 'ms.brands',
            data: brands
        }
        storehippo.update(request, function (err, result) {
            assert.equal(err.status, 400, 'updating a brand name did not give proper status');
            assert.equal(err.data, 'Request must contain the recordId', 'updating a brand name did not give proper message');
            done();
        })
    })

    afterEach(function (done) {
        var request = {
            entity: 'ms.brands',
            recordId: id
        }
        storehippo.del(request, function (err, result) {
            if (err) throw err
            done();
        })
    })


})