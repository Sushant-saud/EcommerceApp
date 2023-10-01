import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./KhaltiConfig";
import { useHistory, useLocation } from "react-router-dom";
export default function Khalti() {
  const location = useLocation();
  console.log(location);
  let checkout = new KhaltiCheckout(config);
  let amount = location.state.total*100;
  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => checkout.show({ amount })} style={buttonStyles}>
        Pay Via Khalti
      </button>
    </div>
  );
}
