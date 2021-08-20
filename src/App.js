import React from "react";

import { Route, Link } from "react-router-dom";

import Pizza from "./Pizza"



const App = () => {




  return (
    <div className = 'App'>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <nav>  
        <Link to='/help'>Help</Link>
        <Route exact path='/'>
        

        </Route>
        
        
      </nav>
      <div>
        <Link to='/pizza'>
          Pizza!
        </Link>
        <Route path= '/pizza'>
          <Pizza />
        </Route>
        
      </div>
      

    
    </div>

   
  );
};
export default App;
