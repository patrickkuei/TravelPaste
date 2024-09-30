const mockData: Data[] = [
  {
    author: "Lorem Ipsum",
    account: "@loremipsum",
    isFavourate: false,
    title: "The Adventures of Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "https://via.placeholder.com/150",
    createdAt: "2024-09-28T12:00:00Z",
    id: "1",
    likedCount: 150,
    sharedCount: 45,
  },
  {
    author: "Dolor Sit",
    account: "@dolorsit",
    isFavourate: true,
    title: "Exploring Dolor Sit",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    thumbnail: "https://via.placeholder.com/150",
    createdAt: "2024-09-27T10:30:00Z",
    id: "2",
    likedCount: 200,
    sharedCount: 80,
  },
  {
    author: "Amet Consectetur",
    account: "@ametconsectetur",
    isFavourate: false,
    title: "A Journey Through Consectetur",
    content:
      "Amet consectetur adipiscing elit. Mauris tempus quam a tellus dignissim, id pharetra neque varius.",
    thumbnail: "https://via.placeholder.com/150",
    createdAt: "2024-09-26T14:15:00Z",
    id: "3",
    likedCount: 320,
    sharedCount: 120,
  },
  {
    author: "Adipiscing Elit",
    account: "@adipiscingelit",
    isFavourate: true,
    title: "The Secrets of Adipiscing Elit",
    content:
      "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    thumbnail: "https://via.placeholder.com/150",
    createdAt: "2024-09-25T09:45:00Z",
    id: "4",
    likedCount: 95,
    sharedCount: 40,
  },
  {
    author: "Sed Do",
    account: "@seddo",
    isFavourate: false,
    title: "Understanding Sed Do",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    thumbnail: "https://via.placeholder.com/150",
    createdAt: "2024-09-24T17:20:00Z",
    id: "5",
    likedCount: 175,
    sharedCount: 60,
  },
];

export default mockData

export type Data = {
  author: string,
  account: string,
  isFavourate: boolean,
  title: string,
  content: string,
  thumbnail: string,
  createdAt: string,
  id: string,
  likedCount: number,
  sharedCount: number,
};