import React, { Component } from 'react';
import { connect } from 'react-redux';
import Create from './../../components/manager-system/product/Create';
// import PropTypes from 'prop-types';
import { actAddToProduct  } from './../../actions/index';
import Lists from '../../components/manager-system/product/Lists';

class ProductsContainer extends Component {

    render() {
        var { onAddToProduct } = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">System page</h1>
                <div className="container">
                    <h3>Manager system</h3>
                </div>
                <Lists />
            </section>
            // <Create
            //     onAddToProduct = { onAddToProduct }
            // >
            // </Create>
        );
    }

}

// ProductsContainer.propTypes = {
//     products : PropTypes.arrayOf(
//         PropTypes.shape({
//             id : PropTypes.number.isRequired,
//             name : PropTypes.string.isRequired,
//             image : PropTypes.string.isRequired,
//             description : PropTypes.string.isRequired,
//             price : PropTypes.number.isRequired,
//             inventory : PropTypes.number.isRequired,
//             rating : PropTypes.number.isRequired
//         })
//     ).isRequired,
//     onAddToCart : PropTypes.func.isRequired,
//     onChangeMessage : PropTypes.func.isRequired
// }

const mapStateToProps = state => {
    return {
        managerProducts : state.managerProducts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToProduct: (managerProducts) => {
            dispatch(actAddToProduct(managerProducts));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
