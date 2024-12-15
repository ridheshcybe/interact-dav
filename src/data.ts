interface Events {
    title: string;
    date: string;
    description: string;
}

const upcomingEvents: Events[] = [];

export const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/members", label: "Members" },
    { href: "/join", label: "Join" },
    { href: "/contact", label: "Contact" },
    { href: "https://stats.uptimerobot.com/Z6V1J3233m", label: "Status" },
];

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

export const members = [
    {
        id: 1,
        name: "Jane Doe",
        role: "President",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 2,
        name: "John Smith",
        role: "Vice President",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 3,
        name: "Emily Brown",
        role: "Secretary",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 4,
        name: "Michael Johnson",
        role: "Treasurer",
        image: "/placeholder.svg?height=100&width=100",
    },
];