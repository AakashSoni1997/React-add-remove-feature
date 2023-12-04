import React, { useEffect, useState } from "react";
// import DUMMY_DATA from "../data/Data";
import MeetUpList from "../meetup/MeetUpList.js";
import axios from "axios";

const AllMeet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUp, setLoadedMeetUp] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        "https://react-getting-6f97b-default-rtdb.firebaseio.com/meetups.json"
      )
      .then((response) => {
        const data = response.data;
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetUp(meetups);
      })
      .catch((error) => {
        console.error("Axios error:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    <section>
      <p>Loading...</p>
    </section>;
  }
  return (
    <section>
      <h2>All Meet UP </h2>
      <MeetUpList meetups={loadedMeetUp} />
    </section>
  );
};

export default AllMeet;
