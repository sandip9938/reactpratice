import React, { useState } from "react";

export default function Todo() {
  const [isediting, setisediting] = useState(false);
  return (
    <>
      {isediting ? <input /> : <p>Some todo</p>}
      <br />
      <button onClick={() => setisediting(isediting)}>Click</button>

    </>
  );
}
