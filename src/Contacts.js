import React, { Component } from 'react';
import {Consumer} from './Context';
import Contactlayout from './ContactLayOut';

class contacts extends Component {
    state = {  }
    
    render() { 
        return ( 
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return (
                      <div>
                          <h1 className="display-4 mt-2 mb-2">Contact
                          <span className="text-danger">List</span>
                          </h1>
                          {contacts.map((contact) => {
                           return <Contactlayout 
                                key={contact.id}
                                contact={contact}
                            />
                          })}
                      </div>
                    )
                }}
            </Consumer>
         );
    }
}
 
export default contacts;