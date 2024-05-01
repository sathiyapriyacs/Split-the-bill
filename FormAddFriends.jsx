import React, { useState } from "react";
import Button from "./Button";

const FormAddFriends = ({ AddFriends }) => {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleButtonClick(e) {
    if (!name || !image) return;
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    AddFriends(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleButtonClick}>
      <label>Friends Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <label>Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <Button>Add </Button>
    </form>
  );
};

export default FormAddFriends;
