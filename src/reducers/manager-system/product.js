import * as Types from './../../constants/ActionType';
var data = JSON.parse(localStorage.getItem('PRODUCT'));
var initialState = data ? data : [];

const managerProducts = (state = initialState, action) => {
    var { product } = action;
    var index = -1; // Không tìm thấy => index = -1
    switch (action.type) {
        case Types.ADD_TO_PRODUCT:
            // data[products.length]
            product.id = data[data.length - 1].id + 1;
            product.price = Number(product.price);
            product.rating = Number(product.rating);
            index = findProductInStore(state, product);
            if (index !== -1) {
                // Tồn tại trong product
            } else {
                // Chưa tồn tại trong cart
                state.push(
                    product
                );
            }
            // Thêm vào localStorage
            localStorage.setItem('PRODUCT', JSON.stringify(state));
            console.log(state);
            return [...state];
        default: return state;
    }
}

var findProductInStore = (products, product) => {
    var index = -1;
    if (products.length > 0) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default managerProducts;