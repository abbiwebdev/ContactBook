import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({brand}) => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow">
     <a href="/" className="navbar-brand text-info">{brand}<i className="fa fa-group text-primary ml-2"></i></a>
     <div className="ml-auto">
         <ul className="navbar-nav">
             <li className="nav-list mr-2 text-uppercase">
              <Link to="/" className="nav-link text-primary">
              <i className="fa fa-home"></i> Home</Link>
             </li>
             <li className="nav-list mr-2 text-uppercase">
             <Link to="/contacts/add" className="nav-link text-primary">
             <i className="fa fa-plus"></i> Contacts</Link>
             </li>
             <li className="nav-list mr-2 text-uppercase">
             <Link to="/about" className="nav-link text-primary">
             <i className="fa fa-question"></i> About</Link>
             </li>
         </ul>
     </div>
   </nav>
  )
}

export default Header;