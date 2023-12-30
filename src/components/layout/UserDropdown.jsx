import React from 'react';

const UserDropdown = () => {
  return (
    <div className="flex-shrink-0 dropdown">
      <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://via.placeholder.com/28?text=!" alt="user" width="32" height="32" className="rounded-circle" />
      </a>
      <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  );
};

export default UserDropdown;
