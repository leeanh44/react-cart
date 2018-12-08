import React, { Component } from 'react';

class Item extends Component {

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
        var { product } = this.props;
        return (
            <tr className="d-flex">
                <td className="col-1">{ product.id }</td>
                <td className="col-3"><a href="#"><i className="fa fa-shopping-cart"></i>{ product.name }</a></td>
                <td className="col-1">04/10/2013</td>                        
                <td className="col-5">{ product.description }</td>
                <td className="col-1"><span className="status text-success">&bull;</span> Active</td>
                <td className="col-3">
                    <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="fa fa-edit"></i></a>&nbsp;
                    <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="fa fa-remove"></i></a>
                </td>
            </tr>
        );
    }

}

export default Item;
;