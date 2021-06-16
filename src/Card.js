import React from "react";

function Card({ val }) {
  return (
    <div className="card">
      <img
        src="https://img.xcitefun.net/users/2014/07/359035,xcitefun-sunset-beach-9.jpg"
        alt="Hello Rohit"
      />
      <h3>
        {val.mission_name} #{val.flight_number}
      </h3>
      <h4>Mission Id:{val.mission_id[0]}</h4>
      <p>Launch year:{val.launch_year}</p>
      <p>Successful Launch:{val.launch_success ? "True" : "False"}</p>
      <p>Successful landing:{val.land_success ? "True" : "False"}</p>
    </div>
  );
}

export default Card;
