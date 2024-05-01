import React from "react";
import Button from "./Button";

const Friend = ({ friend, onSelection }) => {
  return (
    <div>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}

        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p>
        )}

        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => onSelection(friend)}>Select</Button>
      </li>
    </div>
  );
};

export default Friend;
