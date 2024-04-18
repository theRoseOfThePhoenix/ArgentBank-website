import React from "react";
import GreenButton from "../greenbtn/GreenBtn";

function Account({ account }) {
  return (
    <div className="account">
      <h3 className="account_title">{account.title}</h3>
      <p className="account_amount">${account.amount}</p>
      <p className="account_description">{account.description}</p>
      <GreenButton text="View transactions" onClick={undefined} />
    </div>
  );
}

export default Account;
