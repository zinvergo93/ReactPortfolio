import React from "react";
import Evidence from "../../../static/assets/images/site-img/EVIDENCE.jpg";
import Profile from "../../../static/assets/images/site-img/Profile.jpg";

export default function Contact() {
  return (
    <div className="content-page-container">
      <div className="left-column">
        <img src={Evidence} />
      </div>
      <div className="right-column">
        <div className="info-wrapper">
          <img src={Profile} />
          <p>{/* phone icon */} 630-272-2168 </p>
          <p>
            {/* mail icon */}zinvergo@gmail.com <br></br>
            zachary.coding@gmail.com
          </p>
          <p>Fox Lake, IL 60020</p>
        </div>
      </div>
    </div>
  );
}
