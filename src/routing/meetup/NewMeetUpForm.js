import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetUpForm.module.css";
const NewMeetUpForm = (props) => {
  const titleRef = useRef();
  const iamgeRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = iamgeRef.current.value;

    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetUp(meetUpData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">MeetUp Title </label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">MeetUp Image </label>
          <input type="url" required id="image" ref={iamgeRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address </label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description </label>
          <textarea
            rows="5"
            required
            id="description"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add MeetUp </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
