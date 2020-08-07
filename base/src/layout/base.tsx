import React from 'react';
import { NavLink } from 'umi'
export default (props) => {
  const { children } = props
  return (
    <div>
      <nav>
        <NavLink to="/" >基座</NavLink>
        <NavLink to="/app1" >app1</NavLink>
        <NavLink to="/app2" >app2</NavLink>
      </nav>
      {children}
    </div>
  );
}
