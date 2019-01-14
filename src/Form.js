import React, { Component } from 'react';
import {Consumer} from './Context';
import Dry from './Dry';
import axios from 'axios';

class form extends Component {
      state = { 
          name: '',
          email: '',
          phone: '',
          errors: {}
       }

       onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
       }

       onSubmit = (dispatch, e) => {
        e.preventDefault();
        
        const {name, email, phone} = this.state;

        //validation
        if(name === ''){
            this.setState({ errors: {name: 'Name is required'}})
            return;
        }
        if(email === ''){
            this.setState({ errors: {email: 'Email is required'}})
            return;
        }
        if(phone === ''){
            this.setState({ errors: {phone: 'Phone is required'}})
            return;
        }
        
        
        //create new contacts 
        const newContact = {
            name, 
            email,
            phone
        }

        axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        .then(res => dispatch({type: 'ADD_CONTACT', payload: res.data}) )

        //clear feilds 
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        //redirect 

        this.props.history.push("/contacts/add")

       }
  
    render() { 
        const {name, email, phone, errors} = this.state;
        return ( 
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
         <div className="row">
              <div className="col-lg-6 col-sm-12 mx-auto">
                  <div className="card card-body shadow mt-2 mb-3">
                      <h3 className="text-center text-secondary">Store Contacts</h3>
                       <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                           <Dry 
                               label="Name"
                               name="name"
                               className="form-control form-control-lg" 
                               placeholder="enter name"
                               value={name}
                               onChange={this.onChange}
                               error={errors.name}
                           /> 
                           <Dry 
                               label="Email"
                               type="email"
                               name="email"
                               className="form-control form-control-lg" 
                               placeholder="enter email"
                               value={email}
                               onChange={this.onChange}
                               error={errors.email}
                           /> 
                           <Dry 
                               label='Phone'
                               name="phone"
                               className="form-control form-control-lg" 
                               placeholder="enter phone"
                               value={phone}
                               onChange={this.onChange}
                               error={errors.phone}
                           /> 
                           <input type="submit" value="Submit" className=" btn btn-success text-center"/>
                       </form>
                  </div>
              </div>
        </div>
                    )
                }} 
            </Consumer>
         );
    }
}
 
export default form;