export type NewsItem = {
  id: number;
  headline: string;
  description: string;
  date: Date;
};

const useNews: () => NewsItem[] = () => [
  {
    id: 1,
    headline: "King Aurelius Announces Abdication",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: new Date(2023, 11, 30, 12, 20, 22),
  },
  {
    id: 2,
    headline: "Euden Declared Kind",
    description:
      "Vestibulum a odio elementum dui semper rhoncus in ac mi. Sed venenatis venenatis lectus. Ut ante lectus, vulputate eu porta vel, cursus finibus arcu. Integer eget pulvinar nunc. Vestibulum varius, ante non eleifend euismod, magna nulla porta tellus, quis rutrum est nulla at risus. Suspendisse non dapibus tellus.",
    date: new Date(2023, 11, 30),
  },
];

export default useNews;
