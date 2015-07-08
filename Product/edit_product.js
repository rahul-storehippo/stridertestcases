var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');


describe('Updating a product', function () {
    this.timeout(15000000);
    var id;
    var product = {};
    before(function (done) {
        utils.cleanup(storehippo, 'ms.products', function () {
            done();
        })
    })
    beforeEach(function (done) {
        utils.cleanup(storehippo, 'ms.products', function () {


            utils.get('product.json', function (err, data) {
            product = data;
            var request = {
                entity: 'ms.products',
                data: product
            }
            storehippo.add(request, function (err, result) {

                if (err) throw err
                result.data = JSON.parse(result.data);
                id = result.data._id;
                done();
            })
        })
        })
    })

    it('updating an product', function (done) {
        var products = {
            name: 'New Update Test',
            sku: 'New Update Test',
            alias: 'New Update Test'

        }
        var request = {
            entity: 'ms.products',
            recordId: id,
            data: products
        }
        storehippo.update(request, function (err, result) {
            assert.equal(result.status, 200, 'updating an  product did not give proper status');
            assert.equal(result.data, 'updated successfully', "message error");

            storehippo.get({entity: 'ms.products', recordId: id}, function (err, res) {
                res.data = JSON.parse(res.data);
                assert.equal(res.data.name, 'New Update Test', 'updating a product name did not updated name');
                done();
            })

        })

    })

    it('Updating a record with invalid ID', function (done) {
        var products = {
            name: 'invalidID',
            sku: 'invalidID',
            alias: '',
            price: '',
            compare_price: ''


        }

        var request = {
            entity: 'ms.products',
            recordId: '550c0b28372587182a6349e',
            data: products
        }
        storehippo.update(request, function (err, result) {

            assert.equal(err.status, 400, 'updating an  product did not give proper status');
            assert.equal(err.data, 'Request recordId is not valid id', "message error");

            done();
        })
    })

    it('updating a product name without giving any ID', function (done) {
        var products = {
            name: 'updated',
            sku: 'updated',
            alias: '',
            price: '',
            compare_price: ''
        }
        var request = {
            entity: 'ms.products',
            data: products
        }
        storehippo.update(request, function (err, result) {
            assert.equal(err.status, 400, 'updating a product name without giving any ID did not give proper status');
            assert.equal(err.data, 'Request must contain the recordId', 'updating a product name without giving any ID did not give proper message');
            done();
        })
    })

    it('updating a product name with non existing id', function (done) {
        var products = {
            name: 'Testing Update',
            alias: 'testing-update'

        }
        var request = {
            entity: 'ms.products',
            data: products,
            recordId: '5514f8d77c5b4ff73cbae52c'
        }
        storehippo.update(request, function (err, result) {
            assert.equal(result.status, 404, 'updating a product name with non existing id did not give proper status');
            done();
        })
    })

    it('Updating Record with existing alias', function (done) {
        var request1 = {
            entity: 'ms.products',
            data: product

        }
        product.name = "dummytest1";
        product.alias = "dummyttest";
        product.sku = "dummysku";

        storehippo.add(request1, function (err, result) {

            assert(result.status, 200, "product not added");

            var products = {
                name: "Testing Update",
                alias: "dummyttest",
                sku: "dummy"
            }

            var request2 = {
                entity: 'ms.products',
                recordId: id,
                data: products
            }
            storehippo.update(request2, function (err, result) {

                assert.equal(result.status, 200, "alias name not autoincrement");

                done();
            })
        })
    })

    it('updating product with empty SKU', function (done) {
        var products = {
            name: 'emptysku',
            sku: ''


        }

        var request = {
            entity: 'ms.products',
            recordId: id,
            data: products
        }

        storehippo.update(request, function (err, result) {

            assert.equal(result.data, "sku is required.", 'Did nOt give empty sku error');
            done();

        })
    });


    afterEach(function (done) {
        done()
    })
    after(function (done) {
        done()
    })

})




