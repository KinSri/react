import React from "react";
import "remixicon/fonts/remixicon.css";
import Rightcardscontent from "./rightcardscontent";

const Rightcards = (props) => {
  return (
    <div className="h-full w-70 bg-red-500 rounded-4xl shrink-0 relative overflow-hidden">
      <img
        className="h-full w-full object-cover rounded-4xl"
        src={props.img}
        alt=" "
      ></img>
      <Rightcardscontent color={props.color} id={props.id} tag={props.tag} />
      
     
    </div>
  );
};

export default Rightcards;
