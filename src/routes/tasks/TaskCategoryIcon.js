import React from "react";
import { BookingsIcon, CalendarIcon, ListingsIcon, TaskStatusIcon, ChannelIcon } from "../../components/icon";

export const TaskCategoryIcon = ({ category }) => {
  switch (category) {
    case "bookings":
      return <BookingsIcon/>;
    case "calendar":
      return <CalendarIcon/>;
    case "channel":
      return <ChannelIcon/>;
    default:
      return <ListingsIcon/>;
  }
};
