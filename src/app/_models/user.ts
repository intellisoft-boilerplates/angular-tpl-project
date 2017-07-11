export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;

  constructor(user?) {
    if (user) {
      Object.assign(this, user);
    }
  }
}
