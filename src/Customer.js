import React from 'react'

function Customer(props) {
    return (
        <div>
        
        <h1>You are logged in as customer</h1>
          <button onClick={()=>{
           props.handleLogout();
          }}>log Out</button>
        
        </div>
    )
}

export default Customer
