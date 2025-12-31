export interface AuthStateModel{
  isAuthenticated: boolean;
  username: string;
  roles: string[];
  token: string;
}
