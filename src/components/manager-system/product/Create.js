import React, { Component } from 'react';

class Create extends Component {

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
            <section className="section">
                <h1 className="section-heading">Create product</h1>
                <div className="container">
                    <form className="form-horizontal" onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Name:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" placeholder="Enter name product"
                            value={ this.state.name }
                            onChange={ this.onChange }
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Image:</label>
                        <div className="col-sm-10"> 
                        <input type="text" className="form-control" name="image" placeholder="Enter href image"
                            value={ this.state.image }
                            onChange={ this.onChange }
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Description:</label>
                        <div className="col-sm-10"> 
                        <input type="text" className="form-control" name="description" placeholder="Enter description"
                            value={ this.state.description }
                            onChange={ this.onChange }
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Price:</label>
                        <div className="col-sm-10"> 
                        <input type="text" className="form-control" name="price" placeholder="Enter price"
                            value={ this.state.price }
                            onChange={ this.onChange }
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2">Rating:</label>
                        <div className="col-sm-10"> 
                        <input type="text" className="form-control" name="rating" placeholder="Enter rating"
                            value={ this.state.rating }
                            onChange={ this.onChange }
                        />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
            </section>
        );
    }

}

export default Create;
