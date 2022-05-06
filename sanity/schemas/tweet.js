export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in tweet",
      type: "string",
    },
    {
      name: "blockTweet",
      title: "Block Tweet",
      description: "ADMIN Controls: Toggle if Tweet is deemed inappropriate",
      type: "boolean",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "ProfileImg",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "image",
      title: "Tweet image",
      type: "string",
    },
  ],
};
