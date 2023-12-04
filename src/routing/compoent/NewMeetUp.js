import React from "react";
import NewMeetUpForm from "../meetup/NewMeetUpForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewMeetUp = () => {
  const navigate = useHistory();
  const addMeetUpHandler = (meetUpData) => {
    axios
      .post(
        "https://react-getting-6f97b-default-rtdb.firebaseio.com/meetups.json",
        JSON.stringify(meetUpData),
        { headers: { "content-type": "application/json" } }
      )
      .then(() => {
        navigate.replace("/");
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div>
      NewMeetUp
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </div>
  );
};

export default NewMeetUp;
