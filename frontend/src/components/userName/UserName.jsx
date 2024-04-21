import React from "react";
import GreenButton from "../greenbtn/GreenBtn";

function UserName() {
  return (
    <div>
      <section className="welcome-edit">
        <h1>
          Welcome back
          {/* <span>{userProfile}</span> */}
        </h1>
        <GreenButton text="Edit Name" onClick="" />
      </section>
    </div>
  );
}
export default UserName;
