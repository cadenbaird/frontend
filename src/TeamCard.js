import React from "react";

const TeamCard = ({ school, mascot, location }) => {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p>Mascot: {mascot}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default TeamCard;
