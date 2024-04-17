import React from "react";
import MyName from "./MyName";
import MyBio from "./Mybio";

export default function MyProfile() {
  return (
    <div>
      <h1>biodata</h1>
      <MyName />
      <MyBio name="M Rafi Zuhair A" />
    </div>
  );
}
