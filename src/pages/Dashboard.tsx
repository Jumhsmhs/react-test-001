import React from 'react'
import {Outlet , Link   } from 'react-router-dom'
function Dashboard({logout}:any) {
  return (
    <div>
      <h3>Dashboard</h3>
      <Link to="settings"> Settings </Link>
      <Outlet />
      {/* Outlet เอาไว้กดให้แสดง */}
      <p>Welcome User</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard