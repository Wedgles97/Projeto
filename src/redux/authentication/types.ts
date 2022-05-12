export type User = {
  first_name: string;
  last_name: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
};
