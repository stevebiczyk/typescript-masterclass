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

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
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
};
