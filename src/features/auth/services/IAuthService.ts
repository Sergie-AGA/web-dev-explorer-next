export interface IAccountData {
  username: string;
  password?: string;
}

export interface IUserData {
  userID: string;
  username: string;
}

export interface IAuthService {
  register(data: IAccountData): Promise<void>;
  login(data: IAccountData): Promise<IUserData>;
}
