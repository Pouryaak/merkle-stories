import React from "react";
import img1 from "@/assets/images/img1.jpeg";

const StoryCard = () => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${img1}')`,
      }}
    >
      <div>
        <h3>Header</h3>
      </div>
      <div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    </div>
  );
};

export default StoryCard;
