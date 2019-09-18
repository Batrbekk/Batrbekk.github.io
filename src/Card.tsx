import React from "react";
import "./css/Card.css";
import lion from "../src/img/lion.jpg";
import City from "./City";
import Name from "./Name";
import Session_watch from "./Session_watch";
import Contact from "./Contact";
import Technology from "./Technology";
const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="img">
        <img src={lion} alt="" />
      </div>
      <div className="cinema-data">
        <div className="cinema-city">
          <City city_name="Алматы" />
        </div>
        <div className="cinema-name">
          <Name cinema_name="Kinopark 5 Atakent" />
        </div>
        <div className="cinema-session">
          <Session_watch />
        </div>
        <div className="cinema-contact">
          <Contact
            cinema_address="г. Алматы, ТРЦ Atakent Mall, ул. Тимирязева, 42"
            cinema_number="+7 (702) 481 18 90"
          />
        </div>
        <div className="cinema-technology">
          <Technology />
        </div>
      </div>
    </div>
  );
};

export default Card;
