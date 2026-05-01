export const dma = {
  name: "DMA tourisme",
  tagline: "Guided tourism in Madagascar, made simple.",
  contact: {
    whatsappDisplay: "+261 34 11 464 64",
    whatsappE164Digits: "261341146464",
    email: "rjl.arthur@gmail.com",
  },
};

export const outboundLinks = {
  airbnbRooms: [
    {
      title: "Cozy Stay in Foule Point",
      href: "https://www.airbnb.com/rooms/1181157647987128000",
      description: "Entire home in Mahavelona, Madagascar",
      imageSrc: "/images/stays/airbnb-2.png",
      imageAlt: "Cozy stay in Foule Point (photo)",
    },
    {
      title: "Family Gateaway in Foule Point",
      href: "https://www.airbnb.com/rooms/1002625119798054635",
      description: "Beautiful beachfront villa.",
      imageSrc: "/images/stays/airbnb-1.png",
      imageAlt: "Family getaway in Foule Point (photo)",
    },
    {
      title: "Apartment Stay in Tana",
      href: "https://www.airbnb.com/rooms/1509431122700481058",
      description: "Spacious apartment in the heart of the city",
      imageSrc: "/images/stays/airbnb-3.png",
      imageAlt: "Apartment stay in Tana (photo)",
    },
  ],
  airbnbHost: {
    title: "DMA Distribution host profile",
    href: "https://www.airbnb.com/users/profile/1470325502334564972",
  },
} as const;

export const visaSteps = [
  {
    title: "Pick your entry plan",
    body: "Confirm your entry point, travel dates, and how long you plan to stay.",
  },
  {
    title: "Prepare the essentials",
    body: "Have your passport details, a contact address, and travel details ready.",
  },
  {
    title: "Apply and keep proof",
    body: "Apply via the official channel and keep your confirmation for arrival.",
  },
  {
    title: "Arrive and finalize",
    body: "On arrival, follow the official instructions for fees and validation.",
  },
] as const;

