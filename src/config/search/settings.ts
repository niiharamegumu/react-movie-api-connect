export const filterOpt = {
  language: {
    default: "ja",
    choices: [
      {
        value: "ja",
        label: "日本語",
      },
      {
        value: "en-us",
        label: "English",
      },
      {
        value: "de",
        label: "Deutsch",
      },
    ],
  },
  media: {
    default: "all",
    choices: [
      {
        value: "all",
        label: "All",
      },
      {
        value: "movie",
        label: "Movie",
      },
      {
        value: "tv",
        label: "TV",
      },
    ],
  },
  terms: {
    default: "day",
    choices: [
      {
        value: "day",
        label: "Today",
      },
      {
        value: "week",
        label: "This week",
      },
    ],
  },
};
