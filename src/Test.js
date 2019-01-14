import React, { Component } from 'react'

class Test extends Component {
     state = {
         id: '',
         title: '',
         completed: ''
     }

    

  render() {
      const {id, title, completed} = this.state;
    return(
      <div>
        <h1>Testing Component</h1>
         <h1> Title: {title}</h1>
          <h3>ID: {id}</h3>
           <h5>Status: {completed}</h5>
      </div>
    )
  }
}

export default Test