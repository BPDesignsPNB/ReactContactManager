import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;

        //Check for errors
        if (name === '') {
            this.setState({
                errors: {name: 'Name is required'}
            });
            return;
        } 
        if (email === '') {
            this.setState({
                errors: {email: 'Email is required'}
            });
            return;
        } 
        if (phone === '') {
            this.setState({
                errors: {phone: 'Phone is required'}
            });
            return;
        } 

        const newContact = {
            name,
            email,
            phone
        }
        //request
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({ type: 'ADD_CONTACT', payload: res.data })
        
        //Clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        //redirecting to home after submiting
        this.props.history.push('/');
    }

    render() {
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-2 text-white">Add Contact</h1>
                            <div className="card mb-5">
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <TextInputGroup
                                            label="Name"
                                            name="name"
                                            value={name}
                                            placeholder="Enter Name..."
                                            onChange={this.onInputChange}
                                            error={errors.name}
                                        />
                                        <TextInputGroup
                                            label="Email"
                                            name="email"
                                            value={email}
                                            placeholder="Enter Email..."
                                            type="email"
                                            onChange={this.onInputChange}
                                            error={errors.email}
                                        />
                                        <TextInputGroup
                                            label="Phone"
                                            name="phone"
                                            value={phone}
                                            placeholder="Enter Phone..."
                                            onChange={this.onInputChange}
                                            error={errors.phone}
                                        />
                                        <input type="submit" value="Add Contact" className="btn btn-block btn-success" />
                                    </form>
                                </div>
                            </div>
                        </React.Fragment>
                        
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;