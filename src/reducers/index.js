import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';
import managerProduct from './manager-system/product';

const appReducers = combineReducers({
    managerProduct,
    products,
    cart,
    message
});

export default appReducers;