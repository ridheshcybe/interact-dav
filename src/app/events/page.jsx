import { events } from "@/data";
import { isUpcoming } from "@/lib/utils";
import EventList from "@/components/event";
import { Nav } from "@/components/nav";

const EventsPage = async () => {
  const upcomingEvents = events.filter((event) => isUpcoming(event.date));
  const pastEvents = events.filter((event) => !isUpcoming(event.date));

  return (
    <div className="bg-black text-white">
      <Nav />
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-8">Events</h1>
        <EventList title="Upcoming Events" events={upcomingEvents} />
        <EventList title="Past Events" events={pastEvents} />
      </div>
    </div>
  );
};

export default EventsPage;
