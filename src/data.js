export const Links = {
    social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        instagram: "https://www.instagram.com/ic_davbrt",
    },
    links: [{
        link: "/",
        name: "Home"
    },
    { link: "/members", name: "Members" },
    {
        link: "/events",
        name: "Events"
    },
    {
        link: "/gallery",
        name: "Gallery"
    }]
}

export const members = [
    {
        name: "Sarah Wilson",
        title: "Creative Director",
        image: "/5856.jpg",
    },
    {
        name: "Michael Chen",
        title: "Lead Developer",
        image: "/5856.jpg",
    },
    {
        name: "Emily Johnson",
        title: "Club President, Art Enthusiast",
        image: "/5856.jpg",
    },
    {
        name: "David Park",
        title: "Design Lead",
        image: "/5856.jpg",
    },
    {
        name: "Lisa Thompson",
        title: "Marketing Director",
        image: "/5856.jpg",
    },
].map((e, i) => { return { id: i, ...e } })

export const events = [
    {
        name: "Leadership Training Session",
        description: `
This session aims to foster leadership skills and provide an interactive platform for meaningful discussions and skill development. Your participation is highly valued and essential for further engagement in our initiatives.
Looking forward to seeing you there!
Warm regards,
Aarnav Regmi
President , ICDAV RY 24-25`,
        date: new Date(2024, 11, 30, 10, 15),
        location: { lat: 26.4638026, lng: 87.2851197 },
    }
].map((e, i) => { return { id: i, ...e } })

export const images = [
    "-1.webp", "collab0.webp",
    "day0.webp", "day3.webp",
    "0.webp", "dap.webp", "day2.webp", "le.webp",
].map((e, i) => {
    return { src: "/gallery/" + e, alt: "Gallery Image " + i }
});