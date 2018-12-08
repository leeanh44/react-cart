import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import Header from '../Header';

class Lists extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            description: '',
            price: '',
            rating: '',
            inventory: 44
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddToProduct(this.state);
    }

    render() {
        var { products } = this.props;
        return (
            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-10">
                                <a href="#" className="btn btn-primary"><i className="fa fa-plus-circle"></i> <span>Add New User</span></a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr className="d-flex">
                                <th className="col-1">#</th>
                                <th className="col-3">Name</th>						
                                <th className="col-1">Date Created</th>
                                <th className="col-5">Description</th>
                                <th className="col-1">Status</th>
                                <th className="col-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.showProducts(products) }
                        </tbody>
                    </table>
                    <div className="clearfix">
                        {/* <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div> */}
                        <ul className="pagination">
                            <li className="page-item disabled"><a href="#">Previous</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item active"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                            <li className="page-item"><a href="#" className="page-link">Next</a></li>
                        </ul>
                    </div>
                </div>
        
            </div>
        );
    }


    showProducts(products){
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return <Item 
                    key={index} 
                    product={product}
                />
            });
        }
        return result;
    }

}


const mapStateToProps = state => {
    return {
        products : state.products
    }
}

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onAddToCart: (product) => {
//             dispatch(actAddToCart(product, 1));
//         },
//         onChangeMessage : (message) => {
//             dispatch(actChangeMessage(message));
//         }
//     }
// }

export default connect(mapStateToProps, null)(Lists);