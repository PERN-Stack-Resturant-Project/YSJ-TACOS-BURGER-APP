import React from "react";
import Burger from "../components/Burger";
import menu from "../menudata";
export default function Homescreen(){
   return (
      <div>
         <div className="row">

            {menu.map(burger=>{
               return <div className="col-md-4">
                  <div>
                     <Burger burger={burger}/>
                     </div>
                     </div>
            })}
         </div>
      </div>
   )
}