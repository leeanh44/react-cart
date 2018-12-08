import * as Types from './../constants/ActionType';
var products = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg',
        description : 'Sản phẩm do apple sản phẩm',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung galaxy S7',
        image : 'https://s7d2.scene7.com/is/image/SamsungUS/SMG930_gs7_102416?$product-details-jpg$',
        description : 'Sản phẩm do samsung sản phẩm',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : 'http://drop.ndtv.com/TECH/product_database/images/832016120148PM_635_oppo_f1s.jpeg',
        description : 'Sản phẩm do china sản phẩm',
        price : 450,
        inventory : 5,
        rating : 5
    }
];
// localStorage.setItem('PRODUCT', JSON.stringify(products));
var data = JSON.parse(localStorage.getItem('PRODUCT'));

var initialState = data ? data : [];

const products = (state = initialState, action) => {
    var { product } = action;
    switch(action.type){
        case Types.ADD_TO_PRODUCT:
            // index = findProductInCart(state, product);
            // if (index !== -1) {
            //     // Tồn tại trong cart
            //     // Tăng số lượng lên
            //     state[index].quantity += quantity;
            // } else {
            //     // Chưa tồn tại trong cart
            //     state.push({
            //         product,
            //         quantity
            //     });
            // }
            // // Thêm vào localStorage
            // localStorage.setItem('CART', JSON.stringify(state));
            // state.push({
            //     data
            // });
            // localStorage.setItem('PRODUCT', JSON.stringify(state));
            state = JSON.parse(localStorage.getItem('PRODUCT'));
            return [...state];
        default : return [...state];
    }
}

export default products;