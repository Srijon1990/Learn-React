import { useState } from "react";


const ContentSection = () => {
    
const [content ,setContent ]= useState("");

    const btnOnClick = () =>{
      setContent("This is the content which will be change on button click . Never give up. Try your best and make it easy. Nothing is impossible . Demand belongs progress make your demand and follow it .This is the content which will be change on button click . Never give up. Try your best and make it easy. Nothing is impossible . Demand belongs progress make your demand and follow it.This is the content which will be change on button click . Never give up. Try your best and make it easy. Nothing is impossible . Demand belongs progress make your demand and follow it.This is the content which will be change on button click . Never give up. Try your best and make it easy. Nothing is impossible . Demand belongs progress make your demand and follow it.This is the content which will be change on button click . Never give up. Try your best and make it easy. Nothing is impossible . Demand belongs progress make your demand and follow it.This is the content which will be change on button click . Never give up. Try your best and make it easy. Nothing is impossible . Demand belongs progress make your demand and follow it.q.")
      
    }
    return (
        <div>
           <button className="btn" onClick={btnOnClick}>Click</button>
            <p className=".para"> {content } </p>
      
            
            

        </div>
    );
};

export default ContentSection;

