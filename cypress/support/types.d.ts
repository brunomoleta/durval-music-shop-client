interface Response {
  email: string;
  password: string;
}

interface User extends Response {
  firstName: string;
  lastName: string;
}

interface Messages {
  firstName: string;
  lastName: string;
  email: string;
  noConfirmation: string;
  equalPassword: string;
  minimumPassword: string;
}

interface UserFeedback extends User {
  confirmPassword: "aA0123!aaaA";
}
