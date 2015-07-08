/**
 * Created with JetBrains WebStorm.
 * User: atishay
 * Date: 30/6/15
 * Time: 1:40 PM
 * To change this template use File | Settings | File Templates.
 */
it('Checking checkout with Dummy CCavenue', function () {

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
                                    element(by.id('paymentmethod3')).click().then(function () {
                                        browser.waitForAngular();
                                        element(by.id('fourthclick_checkout')).click().then(function () {
                                            browser.waitForAngular();
                                            browser.executeScript('document.getElementById("showcardNo").value="4111111111111111";');
                                            browser.executeScript('document.querySelector("#showcardNo").focus();');
                                            browser.driver.sleep(2000);
                                            browser.executeScript('document.getElementsByName("billingCountry")[0].value="India";');

                                            browser.executeScript('document.getElementById("cardExpMonth").value="12";');
                                            browser.executeScript('document.getElementById("cardExpYear").value="2025";');
                                            browser.executeScript('document.getElementById("showcardCvvNo").value="123"');
                                            browser.executeScript('document.getElementById("cardIssuerBank").value="test"');
                                            browser.executeScript('document.querySelector("#SubmitCRD").click();');
                                            browser.driver.sleep(10000);
                                        })
                                    })
                                })
                            })


                        });
                    }
                    else {
                        element(by.id('thirdclick_checkout')).click().then(function () {
                            browser.waitForAngular();
                            element(by.id('paymentmethod3')).click().then(function () {
                                browser.waitForAngular();
                                element(by.id('fourthclick_checkout')).click().then(function () {
                                    browser.waitForAngular();
                                    browser.executeScript('document.getElementById("showcardNo").value="4111111111111111";');
                                    browser.executeScript('document.querySelector("#showcardNo").focus();');
                                    browser.driver.sleep(2000);
                                    browser.executeScript('document.getElementsByName("billingCountry")[0].value="India";');

                                    browser.executeScript('document.getElementById("cardExpMonth").value="12";');
                                    browser.executeScript('document.getElementById("cardExpYear").value="2025";');
                                    browser.executeScript('document.getElementById("showcardCvvNo").value="123"');
                                    browser.executeScript('document.getElementById("cardIssuerBank").value="test"');
                                    browser.executeScript('document.querySelector("#SubmitCRD").click();');
                                    browser.driver.sleep(10000);
                                })
                            })
                        })
                    }
                })

            })

        });

    });


});

it('Checking checkout with Dummy PayU Money', function () {

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
                                    element(by.id('paymentmethod5')).click().then(function () {
                                        browser.waitForAngular();
                                        element(by.id('fourthclick_checkout')).click().then(function () {
                                            browser.waitForAngular();
                                            browser.executeScript('document.querySelector(".nw_blue_btn.left").click();');
                                            browser.executeScript('document.querySelector(".crd_nbr").value="5123456789012346";');
                                            element(by.model('saveCardsInfo.creditcard.ccnum')).sendKeys('5123456789012346');
                                            element(by.model('saveCardsInfo.creditcard.ccexpmon')).sendKeys('05');
                                            element(by.model('saveCardsInfo.creditcard.ccexpyr')).sendKeys('2017');
                                            element(by.model('saveCardsInfo.creditcard.ccvv')).sendKeys('123');
                                            browser.executeScript('document.querySelector(".blue_btn.left").click();');


                                        })
                                    })
                                })
                            })


                        });
                    }
                    else {
                        element(by.id('thirdclick_checkout')).click().then(function () {
                            browser.waitForAngular();
                            element(by.id('paymentmethod5')).click().then(function () {
                                browser.waitForAngular();
                                element(by.id('fourthclick_checkout')).click().then(function () {
                                    browser.waitForAngular();
                                    browser.executeScript('document.querySelector(".nw_blue_btn.left").click();');
                                    browser.executeScript('document.querySelector(".crd_nbr").value="5123456789012346";');
                                    element(by.model('saveCardsInfo.creditcard.ccnum')).sendKeys('5123456789012346');
                                    element(by.model('saveCardsInfo.creditcard.ccexpmon')).sendKeys('05');
                                    element(by.model('saveCardsInfo.creditcard.ccexpyr')).sendKeys('2017');
                                    element(by.model('saveCardsInfo.creditcard.ccvv')).sendKeys('123');
                                    browser.executeScript('document.querySelector(".blue_btn.left").click();');


                                })
                            })
                        })
                    }
                })

            })

        });

    });


});


it('Checking checkout with Shmart', function () {

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
                                    element(by.id('paymentmethod2')).click().then(function () {
                                        browser.waitForAngular();
                                        element(by.cssContainingText('option', 'INR')).click();
                                        element(by.id('fourthclick_checkout')).click().then(function () {
                                            browser.waitForAngular();

                                            browser.executeScript('document.getElementById("ccd").src="http://www.zwitch.co/api/assets/img/cardlogos/mastercard.png";');
                                            browser.executeScript('document.getElementById("ccType").value="mastercard";');
                                            browser.executeScript('document.getElementById("ccnumber").value="5126520198731981";');
                                            browser.executeScript('document.getElementById("ccnumber").focus()');
                                            browser.executeScript('document.getElementById("cardExpiryMonth").value="08";');
                                            browser.executeScript('document.getElementById("cardExpiryYear").value="2024"');
                                            browser.executeScript('document.getElementById("name_on_card").value="ATISHAY JAIN"');
                                            browser.executeScript('document.getElementById("cvv").value="123"');
                                            browser.executeScript('document.getElementById("card_id_by_consumer").value="ICICI"');
                                            browser.driver.sleep(10000);
                                            browser.executeScript('document.querySelector(".pay_button.btn-block").click();');
                                            browser.driver.sleep(10000);
                                        })
                                    })
                                })
                            })


                        });
                    }
                    else {
                        element(by.id('thirdclick_checkout')).click().then(function () {
                            browser.waitForAngular();
                            element(by.id('paymentmethod2')).click().then(function () {
                                browser.waitForAngular();
                                element(by.cssContainingText('option', 'INR')).click();
                                element(by.id('fourthclick_checkout')).click().then(function () {
                                    browser.waitForAngular();

                                    browser.executeScript('document.getElementById("ccd").src="http://www.zwitch.co/api/assets/img/cardlogos/mastercard.png";');
                                    browser.executeScript('document.getElementById("ccType").value="mastercard";');
                                    browser.executeScript('document.getElementById("ccnumber").value="5126520198731981";');
                                    browser.executeScript('document.getElementById("ccnumber").focus()');
                                    browser.executeScript('document.getElementById("cardExpiryMonth").value="08";');
                                    browser.executeScript('document.getElementById("cardExpiryYear").value="2024"');
                                    browser.executeScript('document.getElementById("name_on_card").value="ATISHAY JAIN"');
                                    browser.executeScript('document.getElementById("cvv").value="123"');
                                    browser.executeScript('document.getElementById("card_id_by_consumer").value="ICICI"');
                                    browser.driver.sleep(10000);
                                    browser.executeScript('document.querySelector(".pay_button.btn-block").click();');
                                    browser.driver.sleep(10000);
                                })
                            })
                        })
                    }
                })

            })

        });

    });


});