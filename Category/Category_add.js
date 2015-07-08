var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');


describe('Adding a category >', function () {
    this.timeout(1000000);

    before(function (done) {
        utils.cleanup(storehippo,'ms.categories', function () {
            done();
        })
    })

    it('Adding an category test case', function (done) {
        var category = {
            name: 'Test1',
            publish:'1'
        }
        var request = {
            entity: 'ms.categories',
            data: category
        }
        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status,200,'Addding an category did not give proper status');
            done();
        })
    })

    it('Adding an duplicate category with same name', function (done) {
        var category = {
             name:'Test2',
            publish:'1'
        }
        var request = {
            entity: 'ms.categories',
            data: category
        }
        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status,200,'Error adding product in "Adding an duplicate category with same name"');
            var category = {
                name:'Test2',
                publish:'1'
            }
            var request = {
                entity: 'ms.categories',
                data: category
            }
            storehippo.call('add', request, function (err, result) {
                assert.equal(result.status,409,'Adding an duplicate category with same name did not give proper status');
                assert.equal(result.data,'duplicate_record','Adding an duplicate category with same name did not give proper data');
                done();
            })
        })
    })



    it('Adding an sub category with existing parent', function (done) {
        var category = {
            name: 'Parent',
            publish:'1'
        }
        var request = {
            entity: 'ms.categories',
            data: category
        }
        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status,200,'Error adding category in "Adding an sub category with existing parent"');
            result.data=JSON.parse(result.data);
            var category = {
                name: 'Child',
                parent: result.data._id,
                publish:'1'
            }
            var request = {
                entity: 'ms.categories',
                data: category
            }
            storehippo.call('add', request, function (err, result) {
                assert.equal(result.status,200,'Adding an sub category with existing parent did not give proper status');
                done();
            })
        })
    })


    afterEach(function (done) {
        done()
    })
    after(function (done) {
        done()
    })

})