import React, { Component } from 'react';
import {Consumer} from './Context';
import axios from 'axios'
import { Link } from 'react-router-dom';


class contactlayout extends Component {
    state = { 
        toggle: false
     }

     onToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
     }

     onDelete = (id, dispatch) => {
         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}))
     }

    render() { 
        const {id, name, email, phone} = this.props.contact;
        const {toggle} = this.state;

          return(
              <Consumer>
                  {value => {
                      const {dispatch} = value;
                      return(
                    <div className="card card-body mt-2 mb-3 shadow">
                        <h3 className="text-center">{name}
                        <i className="fa fa-sort-down ml-2"
                         style={{cursor:"pointer"}}
                        onClick={this.onToggle}></i>
                        <i className="fa fa-times text-danger" style={{float:'right', cursor:"pointer"}}
                        onClick={this.onDelete.bind(this, id, dispatch)}></i>
                        <Link to={`/contacts/add/edit/${id}`}>
                        <i className="fa fa-pencil text-secondary mr-2" style={{float:'right', cursor:"pointer"}}></i>
                        </Link>
                        </h3>
                        { toggle ? (
                        <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                        </ul>
                        ) : null

                        }

                    </div>
                      )
                  }}
              </Consumer>
          )
    }
}
 
export default contactlayout;