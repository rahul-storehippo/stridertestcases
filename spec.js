/**
 * Created with JetBrains WebStorm.
 * User: atishay
 * Date: 16/6/15
 * Time: 6:00 PM
 * To change this template use File | Settings | File Templates.
 */
describe('Automating Checkout', function () {

    beforeEach(function () {

    });

    it('Checking checkout with Checkout', function () {
        browser.get('http://atishaydemo2.storehippo.com/product/test');
        element(by.css('.add-cart')).click().then(function () {
            browser.waitForAngular();
            console.log('after clicking');
            console.log('Opeining page');
            browser.waitForAngular();
            element(by.partialLinkText("Cart")).click().then(function () {
                browser.waitForAngular();
                element(by.partialLinkText("Checkout")).click().then(function () {
                    browser.waitForAngular();
                    element(by.model('fields.email')).isPresent().then(function (result) {
                        if (result) {
                            element(by.model('fields.email')).sendKeys('atishay.jain@manusis.com');
                            element(by.id('firstclick_checkout')).click().then(function () {
                                browser.waitForAngular();
                                console.log('after secong click');
                                element(by.model('fields.full_name')).sendKeys('Test');
                                element(by.model('fields.address')).sendKeys('Home');
                                element(by.model('fields.city')).sendKeys('Delhi');
                                element(by.model('fields.state')).sendKeys('Delhi');
                                element(by.model('fields.zip')).sendKeys('110085');
                                element(by.model('fields.phone')).sendKeys('9911375719');
                                element(by.id('secondclick_checkout')).click().then(function () {
                                    browser.waitForAngular();
                                    element(by.id('thirdclick_checkout')).click().then(function () {
                                        browser.waitForAngular();
                                        element(by.id('paymentmethod4')).click().then(function () {
                                            browser.waitForAngular();
                                            element(by.id('fourthclick_checkout')).click().then(function () {
                                                browser.waitForAngular();
                                                browser.driver.sleep(10000);
                                                browser.executeScript('document.getElementsByName("LastName")[0].value="Visa";');
                                                browser.executeScript('document.getElementById("block1").value="4543";');
                                                browser.executeScript('document.getElementById("block2").value="4740";');
                                                browser.executeScript('document.getElementById("block3").value="0224";');
                                                browser.executeScript('document.getElementById("block4").value="9996";');
                                                browser.executeScript('document.getElementById("month").value="6";');
                                                browser.executeScript('document.getElementById("year").value="2017";');
                                                browser.executeScript('document.getElementById("Cvv").value="956";');
                                                browser.executeScript('document.getElementById("ContentPlaceHolderBody_btnSubmit").click();');
                                                browser.driver.sleep(10000);
                                                element(by.binding('order.payment_method.name')).getText().then(function (name) {
                                                    expect(name).toBe('Checkout');

                                                });
                                            })
                                        })
                                    })
                                })


                            });
                        }
                        else {
                            element(by.id('thirdclick_checkout')).click().then(function () {
                                browser.waitForAngular();
                                element(by.id('paymentmethod4')).click().then(function () {
                                    browser.waitForAngular();
                                    element(by.id('fourthclick_checkout')).click().then(function () {
                                        browser.waitForAngular();
                                        browser.driver.sleep(10000);
                                        browser.executeScript('document.getElementsByName("LastName")[0].value="Visa";');
                                        browser.executeScript('document.getElementById("block1").value="4543";');
                                        browser.executeScript('document.getElementById("block2").value="4740";');
                                        browser.executeScript('document.getElementById("block3").value="0224";');
                                        browser.executeScript('document.getElementById("block4").value="9996";');
                                        browser.executeScript('document.getElementById("month").value="6";');
                                        browser.executeScript('document.getElementById("year").value="2017";');
                                        browser.executeScript('document.getElementById("Cvv").value="956";');
                                        browser.executeScript('document.getElementById("ContentPlaceHolderBody_btnSubmit").click();');
                                        browser.driver.sleep(10000);
                                        element(by.binding('order.payment_method.name')).getText().then(function (name) {
                                            expect(name).toBe('Checkout');

                                        });
                                    })
                                })
                            })
                        }
                    })

                })

            });

        });


    });


    it('Checking checkout with Dummy Payu', function () {
        browser.get('http://atishaydemo2.storehippo.com/product/test');
        element(by.css('.add-cart')).click().then(function () {
            browser.waitForAngular();
            console.log('after clicking');
            console.log('Opeining page');
            browser.waitForAngular();
            element(by.partialLinkText("Cart")).click().then(function () {
                browser.waitForAngular();
                element(by.partialLinkText("Checkout")).click().then(function () {
                    browser.waitForAngular();
                    element(by.model('fields.email')).isPresent().then(function (result) {
                        if (result) {
                            element(by.model('fields.email')).sendKeys('atishay.jain@manusis.com');
                            element(by.id('firstclick_checkout')).click().then(function () {
                                browser.waitForAngular();
                                console.log('after secong click');
                                element(by.model('fields.full_name')).sendKeys('Atishay Jain');
                                element(by.model('fields.address')).sendKeys('Home');
                                element(by.model('fields.city')).sendKeys('Delhi');
                                element(by.model('fields.state')).sendKeys('Delhi');
                                element(by.model('fields.zip')).sendKeys('110085');
                                element(by.model('fields.phone')).sendKeys('9911375719');
                                element(by.id('secondclick_checkout')).click().then(function () {
                                    browser.waitForAngular();
                                    element(by.id('thirdclick_checkout')).click().then(function () {
                                        browser.waitForAngular();
                                        element(by.id('paymentmethod1')).click().then(function () {
                                            browser.waitForAngular();
                                            element(by.id('fourthclick_checkout')).click().then(function () {
                                                browser.waitForAngular();
                                                //browser.executeScript('document.querySelector("#try-again-button").click();');
                                                browser.driver.sleep(10000);
                                                browser.executeScript('document.getElementById("ccard_number").value="5123456789012346";');
                                                browser.executeScript('document.getElementById("cname_on_card").value="Any name";');
                                                browser.executeScript('document.getElementById("ccvv_number").value="123";');
                                                browser.executeScript('document.getElementById("cexpiry_date_month").value="05"');
                                                browser.executeScript('document.getElementById("cexpiry_date_year").value="2017"');
                                                browser.executeScript('document.querySelector("#pay_button").click();');
                                                browser.driver.sleep(20000);
                                                element(by.binding('order.payment_method.name')).getText().then(function (name) {
                                                    expect(name).toBe('online payments');

                                                });
                                            })
                                        })
                                    })
                                })


                            });
                        }
                        else {
                            element(by.id('thirdclick_checkout')).click().then(function () {
                                browser.waitForAngular();
                                element(by.id('paymentmethod1')).click().then(function () {
                                    browser.waitForAngular();
                                    element(by.id('fourthclick_checkout')).click().then(function () {
                                        browser.waitForAngular();
                                        //browser.executeScript('document.querySelector("#try-again-button").click();');
                                        browser.driver.sleep(10000);
                                        browser.executeScript('document.getElementById("ccard_number").value="5123456789012346";');
                                        browser.executeScript('document.getElementById("cname_on_card").value="Any name";');
                                        browser.executeScript('document.getElementById("ccvv_number").value="123";');
                                        browser.executeScript('document.getElementById("cexpiry_date_month").value="05"');
                                        browser.executeScript('document.getElementById("cexpiry_date_year").value="2017"');
                                        browser.executeScript('document.querySelector("#pay_button").click();');
                                        browser.driver.sleep(20000);
                                        element(by.binding('order.payment_method.name')).getText().then(function (name) {
                                            expect(name).toBe('online payments');

                                        });
                                    })
                                })
                            })
                        }
                    })

                })

            });

        });


    });


    it('Checking checkout with COD', function () {
        browser.get('http://atishaydemo2.storehippo.com/product/test');
        element(by.css('.add-cart')).click().then(function () {
            browser.waitForAngular();
            console.log('after clicking');
            console.log('Opeining page');
            browser.waitForAngular();
            element(by.partialLinkText("Cart")).click().then(function () {
                browser.waitForAngular();
                element(by.partialLinkText("Checkout")).click().then(function () {
                    browser.waitForAngular();
                    element(by.model('fields.email')).isPresent().then(function (result) {
                        if (result) {
                            element(by.model('fields.email')).sendKeys('atishay.jain@manusis.com');
                            element(by.id('firstclick_checkout')).click().then(function () {
                                browser.waitForAngular();
                                console.log('after secong click');
                                element(by.model('fields.full_name')).sendKeys('Atishay Jain');
                                element(by.model('fields.address')).sendKeys('Home');
                                element(by.model('fields.city')).sendKeys('Delhi');
                                element(by.model('fields.state')).sendKeys('Delhi');
                                element(by.model('fields.zip')).sendKeys('110085');
                                element(by.model('fields.phone')).sendKeys('9876543210');
                                element(by.id('secondclick_checkout')).click().then(function () {
                                    browser.waitForAngular();
                                    element(by.id('thirdclick_checkout')).click().then(function () {
                                        browser.waitForAngular();
                                        element(by.id('paymentmethod0')).click().then(function () {
                                            browser.waitForAngular();
                                            element(by.id('fourthclick_checkout')).click().then(function () {
                                                browser.waitForAngular();
                                            })
                                        })
                                    })
                                })


                            });
                        }
                        else {
                            element(by.id('thirdclick_checkout')).click().then(function () {
                                browser.waitForAngular();
                                element(by.id('paymentmethod0')).click().then(function () {
                                    browser.waitForAngular();
                                    element(by.id('fourthclick_checkout')).click().then(function () {
                                        browser.waitForAngular();
                                    })
                                })
                            })
                        }
                    })

                })

            });

        });


    });


    afterEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

});