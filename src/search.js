import React from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function search() {
  return <Calendar date={new Date()} />;
}

export default search;
