import React from "react";
import "./css/City.css";

interface city_interface {
  city_name: string;
}

const City: React.FC<city_interface> = props => {
  return (
    <div className="city">
      <p>{props.city_name}</p>
    </div>
  );
};

export default City;
