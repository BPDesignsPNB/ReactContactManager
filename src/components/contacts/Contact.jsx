import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Consumer} from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Contact extends Component {

    state = {
        showContactInfo: false
    };

    //toggle contact info
    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        }) 
    };

    //delete contact
    onDeleteClick = async (id, dispatch) => {
        try{
            //request
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({ type: "DELETE_CONTACT", payload: id });
        } catch(ex) {
            dispatch({ type: "DELETE_CONTACT", payload: id });
        }
        
    }
 
    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return <div className="card card-body mb-3">
                        <h4 className="contactName">
                          <i className="fas fa-user" /> {name}&nbsp;
                          <i onClick={this.onShowClick} className="fas fa-sort-down" />
                          <i className="fas fa-times" onClick={this.onDeleteClick.bind(this, id, dispatch)} />
                            <Link to={`contacts/edit/${id}`}><i className="far fa-edit"></i></Link>
                        </h4>
                        {showContactInfo ? <ul className="list-group">
                            <li className="list-group-item">
                              <i className="fas fa-envelope" />{email}
                            </li>
                            <li className="list-group-item">
                              <i className="fas fa-phone" />{phone}
                            </li>
                          </ul> : null}
                      </div>;
                }}
            </Consumer>
            
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;