import React from "react";

export const TechStack = ({ title, body, images }) => {
  return (
    <div>
      {" "}
      <h2 data-speed="1.2">{title}</h2>
      <p data-speed="1.13">{body}</p>
      <div className="flex row technologies">
        {images.map((img, imgIndex) => (
          <img
            data-speed="1.23"
            src={img}
            alt={"img"}
            key={imgIndex + "tech-in-techstack"}
            // data-lag={0.2 + imgIndex * 0.05}
          />
        ))}
      </div>
    </div>
  );
};
