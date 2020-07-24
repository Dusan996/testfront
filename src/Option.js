import React from "react";

export function Option({ title, details, label }) {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div className="option--container">
      <h3 onClick={() => setShowMore(!showMore)}>{title}</h3>
      {showMore && (
        <div className="option--details">
          <p>{details}</p>
          <div className="option--form">
            <input type="checkbox" />
            <p>{label}</p>
          </div>
        </div>
      )}
    </div>
  );
}
