var storehippo = require('storehippo-nodejs-sdk')({
    storename: 'atishaydemo2',
    access_key: 'admin'
});
var assert = require('assert');
var utils = require('ms-test-utils');


describe('Adding options_sets >', function () {
    this.timeout(15000000);
    var options = {};
    before(function (done) {
        utils.cleanup(storehippo, 'ms.option_set', function () {
            done();
        });
    });

    it('Adding an options set test case', function (done) {
        options = {
            name: 'Testing',
            options: [
                {
                    alias: 'color',
                    display_name: 'Color',
                    name: 'color',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: 'red',
                            value: 'red',
                            color: 'red'},

                        {
                            label: 'blue',
                            value: 'blue',
                            color: 'blue'
                        }
                    ]
                },


                {
                    alias: 'size',
                    display_name: 'Size',
                    name: 'size',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: 'S',
                            value: 'S'
                        },

                        {
                            label: 'M',
                            value: 'M'

                        }
                    ]
                }
            ]
        };

        var request = {
            entity: 'ms.option_set',
            data: options
        };

        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status, 200, 'Adding an options set test case did not give proper status');
            done();
        });
    });

    it('Adding an options set with duplicate data', function (done) {
        options = {
            name: 'Testing Duplicity',
            options: [
                {
                    alias: 'width',
                    display_name: 'width',
                    name: 'width',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: '8cm',
                            value: '8'
                        },

                        {
                            label: '16cm',
                            value: '16'
                        }
                    ]
                },
                {
                    alias: 'height',
                    display_name: 'Height',
                    name: 'height',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: '8cm',
                            value: '8'
                        },

                        {
                            label: '16cm',
                            value: '16'

                        }
                    ]

                }
            ]
        };

        var request = {
            entity: 'ms.option_set',
            data: options
        };

        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status, 200, 'Error in adding option set in test case :"Adding an options set with duplicate data"');
            storehippo.call('add', request, function (err, result) {
                assert.equal(result.status, 409, 'Adding an options set with duplicate data did not give proper status');
                assert.equal(result.data, 'duplicate_data', 'Adding an options set with duplicate data did not give proper data');
                done();
            })
        });
    });

    it('Adding an options set with duplicate options', function (done) {
        options = {
            name: 'Testing Duplicate Option',
            options: [
                {
                    alias: 'storage',
                    display_name: 'Storage',
                    name: 'storage',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: '8gb',
                            value: '8'
                        },

                        {
                            label: '16gb',
                            value: '16'
                        }
                    ]
                },


                {
                    alias: 'color',
                    display_name: 'Color',
                    name: 'color',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: 'White',
                            value: 'white',
                            color: 'white'
                        },

                        {
                            label: 'Black',
                            value: 'black',
                            color: 'black'
                        }
                    ]

                }
            ]
        };


        var request = {
            entity: 'ms.option_set',
            data: options
        };

        storehippo.call('add', request, function (err, result) {
            assert.equal(result.status, 200, 'Error in adding option set in test case :"Adding an options set with duplicate options"');
            options.name='Duplicate Option Test';
            storehippo.call('add',request,function(err,result){
                assert.equal(result.status, 409, 'Adding an options set with duplicate options did not give proper status');
                assert.equal(result.data, 'duplicate_data', 'Adding an options set with duplicate options did not give proper data');
                done();
            })

        });
    });

    it('Adding an options set with "image" type ', function (done) {

        options = {
            name: 'Testing',
            options: [
                {
                    alias: 'color',
                    display_name: 'Color',
                    name: 'color',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: 'red',
                            value: 'red',
                            color: 'red'},

                        {
                            label: 'blue',
                            value: 'blue',
                            color: 'blue'
                        }
                    ]
                },


                {
                    alias: 'size',
                    display_name: 'Size',
                    name: 'size',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: 'S',
                            value: 'S'
                        },

                        {
                            label: 'M',
                            value: 'M'

                        }
                    ]

                }
            ]
        };


        var request = {
            entity: 'ms.option_set',
            data: options
        };

        storehippo.call('add', request, function (err, result) {
            console.log('eeeeerrrrroooorrrr is here', err);
            console.log('rrrrrrressssult is here', result);
            done();
        });
    });

    it('Adding an options set with "image" type with missing images ', function (done) {
        options = {
            name: 'imagee1',
            options: [
                {
                    alias: 'clr',
                    display_name: 'clr',
                    name: 'clr',
                    required: '1',
                    type: 'image',
                    values: [
                        {
                            label: 'red',
                            value: 'red',
                            image: {
                                data: "http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tigr-Wild-Cat-Images.jpg",
                                uploadType: 'url',

                                type: "image/jpeg"
                            }
                        },

                        {
                            label: 'blue',
                            value: 'blue',
                            image: {
                                data: "http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg",
                                uploadType: 'url',

                                type: "image/jpeg"
                            }
                        }
                    ]
                }


            ]
        };


        var request = {
            entity: 'ms.option_set',
            data: options
        };

        storehippo.call('add', request, function (err, result) {
            console.log('eeeeerrrrroooorrrr is here', err);
            console.log('rrrrrrressssult is here', result);
            done();
        })
    })

    it('Adding an options with "swatch" type', function (done) {
        options = {
            name: 'swatch1',
            options: [
                {
                    alias: 'clr',
                    display_name: 'clr',
                    name: 'clr',
                    required: '1',
                    type: 'swatch',
                    values: [
                        {
                            label: 'red',
                            value: 'red',
                            color: 'red'},

                        {
                            label: 'blue',
                            value: 'blue',
                            color: 'blue'
                        }
                    ]
                },


                {
                    alias: 'sz',
                    display_name: 'sz',
                    name: 'sz',
                    required: '1',
                    type: 'radio',
                    values: [
                        {
                            label: 'S',
                            value: 'S'
                        },

                        {
                            label: 'M',
                            value: 'M'

                        }
                    ]

                }
            ]
        };

        var request = {
            entity: 'ms.option_set',
            data: options
        };

        storehippo.call('add', request, function (err, result) {
            console.log('eeeeerrrrroooorrrr is here', err);
            console.log('rrrrrrressssult is here', result);
            done();
        })
    })

    it('Adding an options with empty data', function (done) {
        options = {
            name: '',
            options: [
                {
                    alias: '',
                    display_name: '',
                    name: '',
                    required: '',
                    type: '',
                    values: [
                        {
                            label: '',
                            value: '',
                            color: ''},

                        {
                            label: '',
                            value: '',
                            color: ''
                        }
                    ]
                }


            ]
        };

        var request = {
            entity: 'ms.option_set',
            data: options
        };

        storehippo.call('add', request, function (err, result) {
            console.log('eeeeerrrrroooorrrr is here', err);
            console.log('rrrrrrressssult is here', result);
            done();
        });
    });


});