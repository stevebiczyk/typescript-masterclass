let firstName = <any>"Istvan";
let lastName = "Biczyk" as any;

// User fromm API
let user = {
  name: "Mark",
  email: "mark@email.com",
};

type User {
    name: string;
    email: string;
}

function fetchUser() {
  return user as User;
}

const userFromAPI = fetchUser();
