export interface UserDataI {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}
