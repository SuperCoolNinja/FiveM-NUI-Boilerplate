import React, { useState, useEffect } from "react";
import CalloutUI from "./components/CalloutUI";

const App: React.FC = () => {
  const [callout, setCallout] = useState<any>(null);
  const isDebugMode = import.meta.env.VITE_DEBUG_MODE === "true";

  useEffect(() => {
    console.log("ENV Debug Mode = ", isDebugMode);

    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "SHOW_CALLOUT") {
        setCallout(event.data.data);
      }
    };

    if (isDebugMode) {
      setCallout({
        title: "Mocking Data Title",
        description: "Mocking Data description.",
      });
    } else {
      window.addEventListener("message", handleMessage);
    }

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [isDebugMode]);

  const acceptCallout = () => {
    const url = isDebugMode
      ? "/acceptCallout"
      : `https://${GetParentResourceName()}/acceptCallout`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ calloutId: callout?.id }),
    }).then(() => setCallout(null));
  };

  const rejectCallout = () => {
    const url = isDebugMode
      ? "/rejectCallout"
      : `https://${GetParentResourceName()}/rejectCallout`;

    fetch(url, {
      method: "POST",
    }).then(() => setCallout(null));
  };

  return (
    <div className="app">
      {callout && (
        <CalloutUI
          title={callout.title}
          description={callout.description}
          onAccept={acceptCallout}
          onReject={rejectCallout}
        />
      )}
    </div>
  );
};

export default App;
