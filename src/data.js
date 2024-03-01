import tourFirst from "./assets/images/tour-1.jpeg";
import tourSecond from "./assets/images/tour-2.jpeg";
import tourThird from "./assets/images/tour-3.jpeg";
import tourFourth from "./assets/images/tour-4.jpeg";
export const Navbar = [
  {
    id: 1,
    name: "home",
    href: "#home",
  },
  {
    id: 2,
    name: "about",
    href: "#about",
  },
  {
    id: 3,
    name: "services",
    href: "#services",
  },
  {
    id: 4,
    name: "tours",
    href: "#tours",
  },
];
export const socialLink = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
  },
];
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    locationImg: tourFirst,
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    days: 6,
    amount: 2100,
  },
  {
    id: 2,
    title: "best of java",
    date: "october 1th, 2020",
    locationImg: tourSecond,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    days: 11,
    amount: 1400,
  },
  {
    id: 3,
    title: "explore hong kong",
    date: "september 15th, 2020",
    locationImg: tourThird,
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: " hong kong",
    days: 8,
    amount: 5000,
  },
  {
    id: 4,
    title: "kenya highlights",
    date: "december 5th, 2019",
    locationImg: tourFourth,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    days: 20,
    amount: 3300,
  },
];
