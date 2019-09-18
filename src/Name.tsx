import React from "react";
import "./css/Name.css";
import { string } from "prop-types";

interface name_interface {
  cinema_name: string;
}

const Name: React.FC<name_interface> = props => {
  return (
    <div className="name">
      <p>{props.cinema_name}</p>
    </div>
  );
};

export default Name;
