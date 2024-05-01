import React, { useState } from "react";
import "./styles.css";
import FriendsList from "./components/FriendsList";
import FormAddFriends from "./components/FormAddFriends"; // Fixed import typo
import FormSplitBill from "./components/FromSplitBill"; // Fixed import typo
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends); // Corrected useState argument
  const [showForm, setShowForm] = useState(false);
  const [selectfriends, setSelectfriends] = useState(null);

  function toggleForm() {
    // Renamed ClickEvent to toggleForm for clarity
    setShowForm((show) => !show);
  }
  function AddFriends(newFriend) {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    setShowForm(false);
  }

  function handleSelect(friend) {
    setSelectfriends(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelect}
          selectedFriend={selectfriends}
        />
        {showForm && <FormAddFriends AddFriends={AddFriends} />}{" "}
        <Button onClick={toggleForm}>
          {showForm ? "Close" : "Add Friends"}
        </Button>
      </div>
      {selectfriends && <FormSplitBill selectedFriend={selectfriends} />}
    </div>
  );
}
