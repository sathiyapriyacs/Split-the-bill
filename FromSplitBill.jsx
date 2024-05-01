import React from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h1>SPLIT A BILL WITH {selectedFriend.name}</h1>

      <div className="form-group">
        <label>your Bill Value</label>

        <input type="text" />
      </div>

      <div className="form-group">
        <label>Your expense</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>{selectedFriend.name} expense</label>

        <input type="text" disabled />
      </div>

      <lable>Who is paying the Bill </lable>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
