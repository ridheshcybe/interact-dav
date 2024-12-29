"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), {
  loading: () => <p>Loading map...</p>,
  ssr: false,
});

const EventItem = ({ event }) => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="border rounded-lg p-4 mb-4">
      <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
      <p className="mb-2">{event.description}</p>
      <p className="mb-2">Date: {new Date(event.date).toLocaleString()}</p>
      <button
        onClick={() => setShowMap(!showMap)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {showMap ? "Hide Map" : "Show Map"}
      </button>
      {showMap && (
        <div className="mt-4 h-64 w-full">
          <Map location={event.location} name={event.name} />
        </div>
      )}
    </div>
  );
};

const EventList = ({ title, events }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {events.length > 0 ? (
        events.map((event) => <EventItem key={event.id} event={event} />)
      ) : (
        <p>No events to display.</p>
      )}
    </div>
  );
};

export default EventList;
