import React from 'react'

const Pizza = () => {



    return(
       <div>
         <h2>Build your own pizza</h2>
         <form id='pizza-form'>

          Name:<br/>
            <input id='name-input' type='text'/><br/><br/>
           PICK YOUR SIZE:<br/><br/>          
           <select id='size-dropdown'>
             <option>--Size--</option>
             <option>Small</option>
             <option>Medium</option>
             <option>Large</option>
             <option>Family</option>
           </select>
           <br/>
           <br/>
           Select Crust Style:<br/><br/> 
            <select>
              <option>--Crust--</option>
              <option>Thin</option>
              <option>Pan</option>
              <option>Deep Dish</option>
              <option>Stuffed Crust</option>
            </select>
            <br/>
            <br/>
            <label>
              Main Toppings:<br/><br/> 
             <input type="checkbox"/>
             Pepperoni
             <input type="checkbox"/>
             Sausage
             <input type="checkbox"/>
             Canadian Bacon<br/>
             <input type="checkbox"/>
             Beef
             <input type="checkbox"/>
             Chicken
             <input type="checkbox"/>
             Bacon
             <input type="checkbox"/>
             Cheese
             <br/>
             <input type="checkbox"/>
             None
            </label>
            <br/>
            <br/>
            <label>
            Veggies:<br/><br/>
            <div>
              <input type="checkbox"/>
             Onions
              <input type="checkbox"/>
             Green Peppers
              <input type="checkbox"/>
             Banana Peppers<br/>
              <input type="checkbox"/>
             Green Olives
              <input type="checkbox"/>
             Black Olives
              <input type="checkbox"/>
             Mushrooms
              <input type="checkbox"/>
             Tomatoes
              <br/>
              <input type="checkbox"/>
             Garlic
              <input type="checkbox"/>
             Basil
              <input type="checkbox"/>
             None
             </div>
            </label>
            <br/>
            Special Instructions:<br/>
            <input id='special-text' type='text'/><br/><br/>
            <br/>
            <button id='order-button'>Add to Order</button>
         </form>

       </div>
    )
}

export default Pizza