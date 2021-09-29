import React from "react";

export const Btn = ({
  title = "title",
  func = () => console.log("function"),
  variant = "transparent",
  style = null,
  icon = null,
}) => {
  return (
    <div
      className={`flex row ${variant} btn `}
      onClick={() => func()}
      style={style}
    >
      <>
        {icon ? <span className="material-icons">{icon}</span> : null}
        <p>{title}</p>
      </>
    </div>
  );
};
