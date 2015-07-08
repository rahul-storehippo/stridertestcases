/**
 * Created with JetBrains WebStorm.
 * User: atishay
 * Date: 2/7/15
 * Time: 1:34 PM
 * To change this template use File | Settings | File Templates.
 */


describe('Test Cases >',function(){

    //Inculde Test Files For Brands
    require('./Brand/Brand_add');
    require('./Brand/Brand_del');
    require('./Brand/Brand_get');
    require('./Brand/Brand_list');
    require('./Brand/Brand_update');

    //Include Test Files For Categories
    require('./Category/Category_add');
    require('./Category/Category_list');
    require('./Category/Category_del');
    require('./Category/Category_get');
    require('./Category/Category_update');

    //TODO Include Test Files For Cart

    //TODO Include Test Files For Import

    // Include Test Files For Products
    require('./Product/add_product');
    require('./Product/del_product');
    require('./Product/edit_product');
    require('./Product/get_product');
    require('./Product/list_product');

    //TODO Include Test Files For Shipping

    //TODO Include Test Files For Users

})