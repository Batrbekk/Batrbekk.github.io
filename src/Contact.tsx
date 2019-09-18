import React from "react";
import "./css/Contact.css";
import location from "../src/img/location.png";
import phone from "../src/img/call.png";
interface Contact_interface {
  cinema_address: string;
  cinema_number: string;
}

const Contact: React.FC<Contact_interface> = props => {
  return (
    <div className="contact-box">
      <div className="address">
        <div>
          <img src={location} alt="" />
        </div>
        <div>
          <p>{props.cinema_address}</p>
        </div>
      </div>
      <div className="number">
        <div>
          <img src={phone} alt="" />
        </div>
        <div>
          <p>{props.cinema_number}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
