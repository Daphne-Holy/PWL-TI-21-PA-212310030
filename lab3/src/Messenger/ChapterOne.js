import React, { Component } from "react";
import backgroundImage from "../asset/744908.jpg"; // Pastikan lokasi file gambar benar
import MessengerUI from "./Widgets/Components/MessengerUI";

export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center fw-bold">
          Chapter One: The Messagers
        </h1>
        <MessengerUI />
      </div>
    );
  }
}
