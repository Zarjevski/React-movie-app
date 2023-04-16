import React from "react";

const Skeleton = ({ height, width }) => {
  return (
    <div className="skeleton" style={{ width: width, height: height }}></div>
  );
};

export default Skeleton;
