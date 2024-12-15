interface Events {
    title: string;
    date: string;
    description: string;
}

const upcomingEvents: Events[] = [];

export const cards = [
    {
        title: "Community Service",
        description: "Make a real impact in your community through meaningful service projects"
    },
    {
        title: "Leadership Development",
        description: "Develop essential leadership skills through hands-on experience"
    },
    {
        title: "Global Connection",
        description: "Connect with other Interact clubs worldwide and make lasting friendships"
    }
]

export const UpcomingEvents = upcomingEvents.length == 0 ? [
    {
        title: "No upcoming events",
        date: "",
        description: "We will update further on",
    }
] : upcomingEvents;
