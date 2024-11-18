// let post: {
//   title: string;
//   content: string;
//   date: Date;
// } = {
//   title: "This is the blog title",
//   content: "This is the blog content",
//   date: new Date(),
// };

type Author = {
  name: string;
  age: number;
  email: string;
};

type AwardDetails = {
  name: string;
  date: Date;
};

type Awards = {
  [key: string]: AwardDetails;
};

type Post = {
  title: string; // Type Annotations using semicolons instead of commas
  content: string;
  date: Date;
  author: Author; // Assign Author type to author property on Post type
  awards: Awards;
};

let post: Post = {
  title: "This is the blog title",
  content: "This is the blog content",
  date: new Date(),
  author: {
    name: "Mike",
    age: 30,
    email: "mike@mike.com",
  },
  awards: {
    best_blog: {
      name: "Best Blog",
      date: new Date(),
    },
    new_blog: {
      name: "New Blog",
      date: new Date(),
    },
  },
};
