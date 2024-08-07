import React from "react";

const CalloutUI: React.FC<ICallout> = ({
  title,
  description,
  onAccept,
  onReject,
}) => {
  return (
    <div className="callout-ui">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onAccept}>Accepter</button>
      <button onClick={onReject}>Refuser</button>
    </div>
  );
};

export default CalloutUI;
