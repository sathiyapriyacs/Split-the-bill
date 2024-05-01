import React from "react";
import Friend from "./Friend";

const FriendsList = ({ friends, onSelection }) => {
  console.log("Friends array:", friends);

  return (
    <div>
      <ul>
        {friends.map((friend) => {
          console.log("Friend ID:", friend.id);
          return (
            <Friend friend={friend} key={friend.id} onSelection={onSelection} />
          );
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
