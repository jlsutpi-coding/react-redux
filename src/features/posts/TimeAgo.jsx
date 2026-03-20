import React from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";

  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return <span className="">&nbsp; {timeAgo}</span>;
};

export default TimeAgo;
