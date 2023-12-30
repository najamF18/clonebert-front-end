import React from 'react'

const NavItem = ({ icon, label }) => {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link px-2 text-truncate">
        <i className={icon}></i>
        <span className="d-none d-sm-inline">{label}</span>
      </a>
    </li>
  );
};

export default NavItem